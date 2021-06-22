/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import { Angle, AngleContainer, CarrouselCards } from "./carousel.styles";

const Carousel = (props) => {
  const carouselRef = React.useRef();
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    carouselRef.current.addEventListener("scroll", (e) => {
      setPercent(e.target.scrollLeft / (e.target.scrollWidth - e.target.offsetWidth));
    });
  }, []);

  React.useEffect(() => {
    if (carouselRef) {
      let isDown = false;
      let startX;
      let scrollLeft;

      carouselRef.current.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft = carouselRef.current.scrollLeft;
      });

      carouselRef.current.addEventListener("mouseleave", () => {
        isDown = false;
      });

      carouselRef.current.addEventListener("mouseup", () => {
        isDown = false;
      });

      carouselRef.current.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const scrollX = (x - startX) * 1;

        carouselRef.current.scrollLeft = scrollLeft - scrollX;
      });
    }
  }, []);

  return (
    <>
      <CarrouselCards ref={carouselRef}>{props.children}</CarrouselCards>
      {/* <AngleContainer>
        <Angle
          classname="prev"
          onClick={() =>
            carouselRef.current.scrollBy({
              left: -100,
              behavior: "smooth",
            })
          }
          disabled={percent === 0}>
          <Image src="/LeftAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
        <Angle
          className="next"
          onClick={() =>
            carouselRef.current.scrollBy({
              left: 100,
              behavior: "smooth",
            })
          }
          disabled={percent >= 1}>
          <Image src="/RightAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
      </AngleContainer> */}
    </>
  );
};

export default Carousel;
