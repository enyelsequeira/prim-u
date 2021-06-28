/* eslint-disable array-callback-return */
export const dataTransformer = (fetchData) => {
  const services = [];
  const faqQuestions = [];
  const partnersQuestions = [];
  const bigCards = [];
  const banner = [];
  const reviews = [];
  const freelancersSalons = [];
  const footerData = [];
  const beautyProducts = [];
  const allQuestions = [];

  fetchData.items.map((entry) => {
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
    } else if (entry.fields.title === "For Costumers") {
      banner.push(entry);
    } else if (entry.fields.footerTittle) {
      footerData.push(entry);
    } else if (entry.fields.freelancersSalonsTitle) {
      freelancersSalons.push(entry);
    } else if (entry.fields.beautyProducts) {
      beautyProducts.push(entry);
    } else if (entry.fields.title === "all questions") {
      allQuestions.push(entry);
    }
  });
  return {
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
  };
};

export const filterQuestions = (questions) => {
  const cQuestions = [];
  const pQuestions = [];
  questions.map((question) => {
    question.fields.faq.map((single) => {
      if (single.fields.faqTitle) {
        cQuestions.push(single);
      } else {
        pQuestions.push(single);
      }
    });
  });

  return {
    cQuestions,
    pQuestions,
  };
};
