import Image from "next/image";
import React from "react";
import Carousel from "../carousel/carousel";
import { GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  BeautyButton,
  CarrouselCard,
  GlobalSectionStyled,
  ImageWrapper,
  InfoWrapper,
  Price,
  PriceContainer,
  ProductText,
  TitleWrapper,
} from "./products.styles";

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
        {data.map((products) => {
          return (
            <CarrouselCard key={products.fields.beautyProducts} mb={[80]}>
              <ImageWrapper>
                <Image
                  src={`https:${products.fields.beautyProductImage.fields.file.url}`}
                  width={400}
                  height={220}
                  layout="intrinsic"
                  quality={100}
                  alt={products.fields.beautyProductImage.fields.title}
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
      <BeautyButton
        as="a"
        href="https://www.prim-u.app/en/list"
        target="_blank"
        rel="noreferrer"
        fontSize={[24]}
        lineHeight={["sub"]}
        mx="auto"
        type="button">
        check out beauty products
      </BeautyButton>
    </GlobalSectionStyled>
  );
};
export default Products;
