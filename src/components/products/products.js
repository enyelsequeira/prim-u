/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from "next/image";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  Angle,
  CarrouselCard,
  CarrouselCards,
  ReviewText,
  AngleContainer,
  Stars,
  TitleReviewWrapper,
} from "./products.styles";

const Reviews = ({ data }) => {
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
        What Our <SpanTitle> Customers</SpanTitle> say{" "}
      </GlobalTitle>
      <CarrouselCards ref={carouselRef}>
        {data.map((r) => {
          const {
            fields: { name, rating, review },
          } = r;
          return (
            <CarrouselCard key={name} mb={[60, 40]}>
              <TitleReviewWrapper pt={[20]} pl={[20]} >
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
                      quality={100} />
                  ))}

                </Stars>
              </TitleReviewWrapper>

              <ReviewText px={[2]} py={[24]} fontSize={[18, 20, 18]} lineHeight={["sub", "xs"]}>
                {review.content[0].content[0].value}
              </ReviewText>
            </CarrouselCard>
          );
        })}
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

export default Reviews;
