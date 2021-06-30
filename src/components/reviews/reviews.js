import Image from "next/image";
import React from "react";
import Carousel from "../carousel/carousel";
import { GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  CarrouselCard,
  GlobalSectionStyled,
  ReviewText,
  Stars,
  TitleReviewWrapper,
} from "./reviews.styles";

const Reviews = ({ data }) => (
  <GlobalSectionStyled>
    <GlobalTitle
      fontSize={[34, 40, 50]}
      lineHeight={["small", "large"]}
      textAlign="center"
      px={[5]}>
      What Our <SpanTitle> Customers</SpanTitle> say{" "}
    </GlobalTitle>

    <Carousel>
      {data.map((r, i) => {
        const {
          fields: { name, rating, review },
        } = r;
        return (
          <CarrouselCard key={i} mb={[60, 80]}>
            <TitleReviewWrapper pt={[20]} px={[20]}>
              <GlobalSubtitle fontSize={[18, 20, 18, 18]} lineHeight={["sub"]}>
                {name}
              </GlobalSubtitle>
              <Stars>
                {[...Array(rating)].map((element, index) => (
                  <Image
                    key={index}
                    src="/images/Star.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    quality={100}
                    alt="star-element"
                  />
                ))}
              </Stars>
            </TitleReviewWrapper>

            <ReviewText
              pl={[2]}
              pr={[30]}
              py={[24]}
              fontSize={[18, 20, 18]}
              lineHeight={["sub", "xs"]}>
              {review.content[0].content[0].value}
            </ReviewText>
          </CarrouselCard>
        );
      })}
    </Carousel>
  </GlobalSectionStyled>
);

export default Reviews;
