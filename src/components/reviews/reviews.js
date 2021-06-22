/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import Carousel from "../carousel/carousel";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import { CarrouselCard, ReviewText, Stars, TitleReviewWrapper, Main, Title } from "./reviews.styles";

const Reviews = ({ data }) => {
  return (
    <Main>
      <Title>
        What Our <SpanTitle> Customers</SpanTitle> say{" "}
      </Title>
      {/* <GlobalTitle
        fontSize={[34, 40, 54, 50]}
        lineHeight={["mediumTwo", "large"]}
        textAlign="center"
        px={[1]}
        mb={[40, 50, 54, 54, 80]}>
        What Our <SpanTitle> Customers</SpanTitle> say{" "}
      </GlobalTitle> */}

      <Carousel>
        {data.map((r) => {
          const {
            fields: { name, rating, review },
          } = r;
          return (
            <CarrouselCard key={name} mb={[60, 40]}>
              <TitleReviewWrapper pt={[20]} pl={[20]}>
                <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                  {name}
                </GlobalSubtitle>
                <Stars>
                  {[...Array(rating)].map((element, index) => (
                    <Image
                      key={index}
                      src="/Star.svg"
                      width={20}
                      height={20}
                      layout="fixed"
                      quality={100}
                    />
                  ))}
                </Stars>
              </TitleReviewWrapper>

              <ReviewText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
                {review.content[0].content[0].value}
              </ReviewText>
            </CarrouselCard>
          );
        })}
      </Carousel>
    </Main>
  );
};

export default Reviews;
