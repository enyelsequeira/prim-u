/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  Angle,
  CarrouselCard,
  CarrouselCards,
  Range,
  ReviewText,
  SliderContainer,
  Stars,
  TitleReviewWrapper,
} from "./carrousel.styles";

const Carrousel = ({ data }) => {
  const carouselRef = useRef();
  const [percent, setPercent] = useState()

  useEffect(() => {
    carouselRef.current.addEventListener("scroll", e => {
      // console.log(e.target.scrollLeft)
      // console.log(e.target.scrollWidth - e.target.offsetWidth)
      setPercent(e.target.scrollLeft/(e.target.scrollWidth - e.target.offsetWidth))
    }) 
  },[])

  console.log(percent)


  // const dragable = useRef("");
  // const slider = useRef("");

  // const [slideIndex, setSlideIndex] = useState(0);

  // function handleChange(e) {
  //   const sliderValue = e.target.value;
  //   setSlideIndex(sliderValue);
  //   console.log(slideIndex);
  // }

  // useEffect(() => {
  //   if (dragable) {
  //     let isDown = false;
  //     let startX;
  //     let scrollLeft;

  //     dragable.current.addEventListener("mousedown", (e) => {
  //       isDown = true;
  //       startX = e.pageX - dragable.current.offsetLeft;
  //       scrollLeft = dragable.current.scrollLeft;
  //     });

  //     dragable.current.addEventListener("mouseleave", () => {
  //       isDown = false;
  //     });

  //     dragable.current.addEventListener("mouseup", () => {
  //       isDown = false;
  //     });

  //     dragable.current.addEventListener("mousemove", (e) => {
  //       if (!isDown) return;
  //       e.preventDefault();
  //       const x = e.pageX - dragable.current.offsetLeft;
  //       const scrollX = (x - startX) * 1;

  //       dragable.current.scrollLeft = scrollLeft - scrollX;
  //     });
  //   }

  //   slider.current.addEventListener("mousedown", (e) => {});
  // }, []);

  return (
    <GlobalSection px={[20, 20, 40, 40, 0]} pt={[20, 60, 80]}>
      <GlobalTitle
        fontSize={[34, 40, 54, 50]}
        lineHeight={["mediumTwo", "large"]}
        textAlign="center"
        px={[1]}
        mb={[40, 50, 54, 54, 80]}>
        What Our <SpanTitle> Customers</SpanTitle> say{" "}
      </GlobalTitle>
      {/* <CarrouselCards ref={dragable}> */}
      <CarrouselCards ref={carouselRef}>
        {data.map((r) => {
          const {
            fields: { name, rating, review },
          } = r;
          return (
            <CarrouselCard key={name} mb={[60, 40]}>
              <TitleReviewWrapper pt={[20]} pl={[20]} width={[268, 335]}>
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
      </CarrouselCards>

      <SliderContainer>
        <Angle 
          // id="prev"
          onClick={e => carouselRef.current.scrollBy({
            left: -20,
            behavior: 'smooth'
          })}
          disabled={percent === 0}
          >
          <Image src="/LeftAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>

        <Range
          min={0}
          max={5}
          type="range"
          // ref={slider}
          // onChange={handleChange}
          // value={slideIndex}
        />

        <Angle 
          // id="next" 
          onClick={e => carouselRef.current.scrollBy({
            left: 20,
            behavior: 'smooth'
          })}
          disabled={percent >= 1}
          >
          <Image src="/RightAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
      </SliderContainer>
    </GlobalSection>
  );
};

export default Carrousel;
