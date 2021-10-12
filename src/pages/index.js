/* eslint-disable no-unused-vars */
import { createClient } from "contentful";
import Head from "next/head";
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
  Products,
  Reviews,
  Services,
  Video,
  Regulations,
  SubscribeSection,
} from "../components";
import { Divider } from "../components/global-components";
import { dataTransformer } from "../helpers/data-transformer";
import BaseLayout from "../layouts/base";

export default function Home({
  services,
  faqQuestions,
  partnersQuestions,
  bigCards,
  banner,
  footerData,
  freelancersSalons,
}) {
  return (
    <BaseLayout>
      <Head>
        <title>Prim-U</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="welcome to our beauty service providing the best products and services out there"
        />
      </Head>

      <NavBar />
      <Hero />
      <Banner data={banner} />
      <Services data={services} />
      <Divider />
      <Events data={bigCards} />
      <Divider />
      <Contact data={freelancersSalons} />
      <Platform />
      <Video />
      <Divider />

      <Accordion
        data={faqQuestions}
        subtitle="For Customers"
        title="Frequently asked"
        span="questions"
      />
      <Accordion data={partnersQuestions} subtitle="For Partners" />
      <Divider />

      <FooterBanner data={footerData} />
      <SubscribeSection />
      <Footer />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFULSPACE,
    accessToken: process.env.ACCESS_TOKEN,
  });
  const res = await client.getEntries();

  const {
    services,
    faqQuestions,
    partnersQuestions,
    bigCards,
    banner,
    reviews,
    freelancersSalons,
    footerData,
    beautyProducts,
    allQuestions,
  } = dataTransformer(res);

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
      beautyProducts,
      allQuestions,
    },
  };
}
