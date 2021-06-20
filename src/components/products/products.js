/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from "next/image";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  CarrouselCard,
  ProductText,
  TitleWrapper,
  ImageWrapper,
  InfoWrapper,
  PriceContainer,
  Price
} from "./products.styles";

import Carousel from "../carousel/carousel";

const Products = ({ data }) => {
  return (

    <GlobalSection px={[0, 40, 40, 0]} pt={[20, 60, 80]}>
      <GlobalTitle
        fontSize={[34, 40, 54, 50]}
        lineHeight={["mediumTwo", "large"]}
        textAlign="center"
        px={[1]}
        mb={[40, 50, 54, 54, 80]}>
        <SpanTitle>beauty products</SpanTitle> for u {" "}
      </GlobalTitle>

      <Carousel>
        {data.map((products, index) => {
          return (
            <CarrouselCard mb={[60, 40]} key={index}>
              <ImageWrapper>
                <Image
                  src={`http:${products.fields.beautyProductImage.fields.file.url}`} 
                  width={400}
                  height={220}
                  layout="intrinsic"
                  quality={100} />
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
                  <Price fontSize={[18]} lineHeight={["sub"]}
                  >₽ {products.fields.price}
                  </Price>  
                  </PriceContainer>
              </InfoWrapper>
            </CarrouselCard>
          );
        })}


      
      </Carousel>
    </GlobalSection>
  );
};

export default Products;
