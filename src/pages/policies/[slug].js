import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import MDXComponents from "../../components/mdx-components";
import { getAllPolicies, policiesFilePaths, PoliciesPath } from "../../helpers/mdx";
import PoliciesLayout from "../../layouts/policies-layout";

export default function PoliciesPages({ source, frontMatter }) {
  return (
    <PoliciesLayout data={frontMatter}>
      <main>
        <MDXRemote {...source} components={MDXComponents} />
      </main>
    </PoliciesLayout>
  );
}

export const getStaticProps = async ({ params }) => {
  const policies = path.join(PoliciesPath, `${params.slug}.mdx`);
  const source = fs.readFileSync(policies);

  const { content, data } = matter(source);
  const allLinks = await getAllPolicies();

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      allLinks,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = policiesFilePaths
    // Remove file extensions for page paths
    // eslint-disable-next-line no-shadow
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
