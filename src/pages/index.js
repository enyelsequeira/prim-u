import { createClient } from "contentful";
import Head from "next/head";
import Accordion from "../components/accordion/accordion";
import BaseLayout from "../layouts/base";

export default function Home({ data, services, faqQuestions, partnersQuestions, bigCards }) {
  // console.log(data);

  // console.log("+++++++++");
  // console.log(services);
  // console.log("==== faq questions=====");
  // console.log(faqQuestions);
  // console.log("=====pquestions=====");
  // console.log(partnersQuestions);
  // console.log("=====big cards======");
  // console.log(bigCards);
  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav /> */}

      {/* <Example /> */}
      <Accordion
        data={faqQuestions}
        subtitle="For Customers"
        title="Frequently asked"
        span="questions"
      />
      <Accordion data={partnersQuestions} subtitle="For Partners" />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: "udvzxn7no754",
    accessToken: "6CYnQJMm1J9PqAIfK0-i1c0h-n8krHGJfNdBOTnVoxU",
  });
  const res = await client.getEntries();
  const services = [];
  const faqQuestions = [];
  const partnersQuestions = [];
  const bigCards = [];
  // this needs to be changed to make things more readable
  // pay attention to this, you should have all the data that you need
  // beauty products needs to be added to the array as well
  res.items.forEach((entry) => {
    if (entry.fields.image) {
      services.push(entry);
    } else if (entry.fields.faqTitle) {
      faqQuestions.push(entry);
    } else if (entry.fields.partnersQuestions) {
      partnersQuestions.push(entry);
    } else if (entry.fields.bigCardsTitle) {
      bigCards.push(entry);
    }
  });

  return {
    props: {
      data: res.items,
      services,
      faqQuestions,
      partnersQuestions,
      bigCards,
    },
  };
}
