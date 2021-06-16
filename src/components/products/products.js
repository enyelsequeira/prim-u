/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from "next/image";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  Angle,
  CarrouselCard,
  CarrouselCards,
  ProductText,
  AngleContainer,
  TitleWrapper,
  ImageWrapper,
  InfoWrapper,
  Price
} from "./products.styles";

const Products = () => {
  const carouselRef = React.useRef();
  const [percent, setPercent] = React.useState(0)


  React.useEffect(() => {
    carouselRef.current.addEventListener("scroll", e => {
      setPercent(e.target.scrollLeft / (e.target.scrollWidth - e.target.offsetWidth))
    })

  }, [])

  React.useEffect(() => {
    if (carouselRef) {
      let isDown = false;
      let startX;
      let scrollLeft;

      carouselRef.current.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft = carouselRef.current.scrollLeft;
      })

      carouselRef.current.addEventListener('mouseleave', () => {
        isDown = false;
      });

      carouselRef.current.addEventListener('mouseup', () => {
        isDown = false;
      });

      carouselRef.current.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const scrollX = (x - startX) * 1;

        carouselRef.current.scrollLeft = scrollLeft - scrollX;
      });
    }

  }, [])

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

      <CarrouselCards ref={carouselRef}>
        <CarrouselCard mb={[60, 40]}>
          <ImageWrapper>
            <Image
              src="/product.png"
              width={400}
              height={220}
              layout="fixed"
              quality={100} />
          </ImageWrapper>

          <InfoWrapper>
            <TitleWrapper pt={[20]} pl={[20]} >
              <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                Scrub - Self heat Manda
              </GlobalSubtitle>
            </TitleWrapper>

            <ProductText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
              Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.
            </ProductText>

            <Price fontSize={[18]} lineHeight={["sub"]}>₽ 277</Price>
          </InfoWrapper>
        </CarrouselCard>
        <CarrouselCard mb={[60, 40]}>
          <ImageWrapper>
            <Image
              src="/product.png"
              width={400}
              height={220}
              layout="fixed"
              quality={100} />
          </ImageWrapper>

          <InfoWrapper>
            <TitleWrapper pt={[20]} pl={[20]} >
              <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                Scrub - Self heat Manda
              </GlobalSubtitle>
            </TitleWrapper>

            <ProductText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
              Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.
            </ProductText>

            <Price fontSize={[18]} lineHeight={["sub"]}>₽ 277</Price>
          </InfoWrapper>
        </CarrouselCard>
        <CarrouselCard mb={[60, 40]}>
          <ImageWrapper>
            <Image
              src="/product.png"
              width={400}
              height={220}
              layout="fixed"
              quality={100} />
          </ImageWrapper>

          <InfoWrapper>
            <TitleWrapper pt={[20]} pl={[20]} >
              <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                Scrub - Self heat Manda
              </GlobalSubtitle>
            </TitleWrapper>

            <ProductText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
              Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.
            </ProductText>

            <Price fontSize={[18]} lineHeight={["sub"]}>₽ 277</Price>
          </InfoWrapper>
        </CarrouselCard>
        <CarrouselCard mb={[60, 40]}>
          <ImageWrapper>
            <Image
              src="/product.png"
              width={400}
              height={220}
              layout="fixed"
              quality={100} />
          </ImageWrapper>

          <InfoWrapper>
            <TitleWrapper pt={[20]} pl={[20]} >
              <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                Scrub - Self heat Manda
              </GlobalSubtitle>
            </TitleWrapper>

            <ProductText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
              Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.
            </ProductText>

            <Price fontSize={[18]} lineHeight={["sub"]}>₽ 277</Price>
          </InfoWrapper>
        </CarrouselCard>
        <CarrouselCard mb={[60, 40]}>
          <ImageWrapper>
            <Image
              src="/product.png"
              width={400}
              height={220}
              layout="fixed"
              quality={100} />
          </ImageWrapper>

          <InfoWrapper>
            <TitleWrapper pt={[20]} pl={[20]} >
              <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                Scrub - Self heat Manda
              </GlobalSubtitle>
            </TitleWrapper>

            <ProductText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
              Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.
            </ProductText>

            <Price fontSize={[18]} lineHeight={["sub"]}>₽ 277</Price>
          </InfoWrapper>
        </CarrouselCard>
        <CarrouselCard mb={[60, 40]}>
          <ImageWrapper>
            <Image
              src="/products.png"
              width={400}
              height={220}
              layout="fixed"
              quality={100} />
          </ImageWrapper>

          <InfoWrapper>
            <TitleWrapper pt={[20]} pl={[20]} >
              <GlobalSubtitle fontSize={[18, 20, 16, 18]} lineHeight={["sub"]}>
                Scrub - Self heat Manda
              </GlobalSubtitle>
            </TitleWrapper>

            <ProductText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
              Scrub for your body, description of the item, something else, some selling text, unique qualities and outstanding properties.
            </ProductText>

            <Price fontSize={[18]} lineHeight={["sub"]}>₽ 277</Price>
          </InfoWrapper>
        </CarrouselCard>
      </CarrouselCards>

      <AngleContainer>
        <Angle
          classname="prev"
          onClick={e => carouselRef.current.scrollBy({
            left: -100,
            behavior: 'smooth'
          })}
          disabled={percent === 0}
        >
          <Image src="/LeftAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
        <Angle
          className="next"
          onClick={e => carouselRef.current.scrollBy({
            left: 100,
            behavior: 'smooth'
          })}
          disabled={percent >= 1}
        >
          <Image src="/RightAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
      </AngleContainer>

    </GlobalSection>
  );
};

export default Products;
