import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import { CarrouselCard, CarrouselCards, ReviewText, TitleReviewWrapper } from "./carrousel.styles";

const Carrousel = ({ data }) => {
  return (
    <GlobalSection px={[0]}>
      <GlobalTitle
        fontSize={[34, 40, 54, 50]}
        lineHeight={["mediumTwo", "large"]}
        textAlign="center"
        px={[1]}
        mb={[40, 50, 54, 54, 80]}>
        What Our <SpanTitle> Customers</SpanTitle> say{" "}
      </GlobalTitle>
      <CarrouselCards>
        {data.map((r) => {
          const {
            fields: { name, rating, review },
          } = r;
          return (
            <CarrouselCard key={name} mb={[60, 40]} width={[, , 434]}>
              <TitleReviewWrapper pt={[20]} pl={[20]} width={[268, 335]}>
                <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                  {name}
                </GlobalSubtitle>
                <p>{rating}</p>
              </TitleReviewWrapper>

              <ReviewText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
                {review.content[0].content[0].value}
              </ReviewText>
            </CarrouselCard>
          );
        })}
      </CarrouselCards>
    </GlobalSection>
  );
};

export default Carrousel;
