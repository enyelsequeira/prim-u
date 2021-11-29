import fs from "fs";
import path from "path";

import matter from "gray-matter";
// Policies is useful when you want to get the path to a specific file
export const PoliciesPath = path.join(process.cwd(), "pagesData");

// postFilePaths is the list of all mdx files inside the Policies directory
export const policiesFilePaths = fs
  .readdirSync(PoliciesPath)
  // Only include md(x) files
  .filter((paths) => /\.mdx?$/.test(paths));

const root = process.cwd();

export async function getAllPolicies() {
  const files = fs.readdirSync(path.join(root, "pagesData"));

  return files.reduce((allPolicies, policiesSlug) => {
    const source = fs.readFileSync(path.join(root, "pagesData", policiesSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: policiesSlug.replace(/\.mdx?$/, ""),
      },
      ...allPolicies,
    ];
  }, []);
}
