/* eslint-disable no-unused-vars */
import { createClient } from "contentful";
import Head from "next/head";
import { useRef } from "react";
import {
  Accordion,
  Banner,
  Contact,
  Events,
  Footer,
  FooterBanner,
  Hero,
  NavBar,
  Platform,
  Services,
  Carrousel
} from "../components";
import { Divider } from "../components/global-components";
import BaseLayout from "../layouts/base";

export default function Home({
  data,
  services,
  faqQuestions,
  partnersQuestions,
  bigCards,
  reviews,
  banner,
  footerData,
  freelancersSalons,
}) {
  const faq = useRef();
  console.log(data)

  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar faq={faq} />
      <Hero />
      <Banner data={banner} />

      <Services data={services} />
      <Events data={bigCards} />
      <Contact data={freelancersSalons} />

      <Platform />
      <div>We need the video here</div>

      <Divider mt={[80]} mb={[, , , , 80]} />
      <Accordion
        ref={faq}
        data={faqQuestions}
        subtitle="For Customers"
        title="Frequently asked"
        span="questions"
      />
      <Accordion data={partnersQuestions} subtitle="For Partners" />
      <Divider mt={[60, 100, 80]} mb={[60, 80, 80]} />

      <FooterBanner data={footerData} />
      <Footer />

      <Carrousel data={reviews} />
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
  const banner = [];
  const reviews = [];
  const freelancersSalons = [];
  const footerData = [];

  res.items.forEach((entry) => {
    if (entry.fields.id) {
      services.push(entry);
    } else if (entry.fields.faqTitle) {
      faqQuestions.push(entry);
    } else if (entry.fields.partnersQuestions) {
      partnersQuestions.push(entry);
    } else if (entry.fields.bigCardsTitle) {
      bigCards.push(entry);
    } else if (entry.fields.name) {
      reviews.push(entry);
    } else if (entry.fields.title) {
      banner.push(entry);
    } else if (entry.fields.footerTittle) {
      footerData.push(entry);
    } else if (entry.fields.freelancersSalonsTitle) {
      freelancersSalons.push(entry);
    }
  });

  return {
    props: {
      data: res.items,
      services,
      faqQuestions,
      partnersQuestions,
      bigCards,
      reviews,
      banner,
      footerData,
      freelancersSalons,
    },
  };
}
