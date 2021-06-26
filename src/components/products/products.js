/* eslint-disable react/no-array-index-key */
import React from "react";
import Image from "next/image";
import { GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  CarrouselCard,
  ProductText,
  TitleWrapper,
  ImageWrapper,
  InfoWrapper,
  PriceContainer,
  Price,
  BeautyButton,
  GlobalSectionStyled
} from "./products.styles";
import Carousel from "../carousel/carousel";

const Products = ({ data }) => {
  return (
    <GlobalSectionStyled>
      <GlobalTitle
        fontSize={[34, 40, 50]}
        lineHeight={["small", "large"]}
        textAlign="center"
        px={[5]}>
        <SpanTitle>beauty products</SpanTitle> for u{" "}
      </GlobalTitle>
      <Carousel>
        {data.map((products, index) => {
          return (
            <CarrouselCard key={index} mb={[80]}>
              <ImageWrapper>
                <Image
                  src={`http:${products.fields.beautyProductImage.fields.file.url}`}
                  width={400}
                  height={220}
                  layout="intrinsic"
                  quality={100}
                  alt={products.fields.beautyProductImage.fields.file.title}
                />
              </ImageWrapper>
              <InfoWrapper>
                <TitleWrapper>
                  <GlobalSubtitle fontSize={[22]} lineHeight={["sub"]}>
                    {products.fields.beautyProducts}
                  </GlobalSubtitle>
                </TitleWrapper>
                <ProductText fontSize={[18]} lineHeight={["sub"]}>
                  {products.fields.description}
                </ProductText>
                <PriceContainer>
                  <Price fontSize={[18]} lineHeight={["sub"]}>
                    ₽ {products.fields.price}
                  </Price>
                </PriceContainer>
              </InfoWrapper>
            </CarrouselCard>
          );
        })}
      </Carousel>
      <BeautyButton as="a"
        href="https://www.prim-u.app/en/list"
        target="_blank"
        rel="noreferrer"
        fontSize={[24]}
        lineHeight={["sub"]}
        mx={"auto"}
        type="button">
        check out beauty products
      </BeautyButton>
    </GlobalSectionStyled>
  );
};
export default Products;