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
    } else if (entry.fields.title) {
      banner.push(entry);
    } else if (entry.fields.footerTittle) {
      footerData.push(entry);
    } else if (entry.fields.freelancersSalonsTitle) {
      freelancersSalons.push(entry);
    } else if (entry.fields.beautyProducts) {
      beautyProducts.push(entry);
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
  };
};
