import Head from "next/head";
import Example from "../components/example/example";
import BaseLayout from "../layouts/base";

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example />
    </BaseLayout>
  );
}
