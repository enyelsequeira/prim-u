import Head from "next/head";
import BaseLayout from "@/layouts/base";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>Hello</BaseLayout>
    </div>
  );
}
