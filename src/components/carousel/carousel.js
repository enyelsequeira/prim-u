/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import { useState, useRef, useEffect } from "react";
import { AngleLeft, AngleRight, CarrouselCards, Wrapper } from "./carousel.styles";

const Carousel = (props) => {
  const carouselRef = useRef();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    carouselRef.current.addEventListener("scroll", (e) => {
      setPercent(Math.ceil(e.target.scrollLeft) / (e.target.scrollWidth - e.target.offsetWidth));
    });
  }, []);

  useEffect(() => {
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
    <CarrouselCards>
      <Wrapper ref={carouselRef}>
        {props.children}
        <AngleLeft
          onClick={() =>
            carouselRef.current.scrollBy({
              left: -100,
              behavior: "smooth",
            })
          }
          disabled={percent === 0}
        />
        <AngleRight
          onClick={() =>
            carouselRef.current.scrollBy({
              left: 100,
              behavior: "smooth",
            })
          }
          disabled={percent >= 1}
        />
      </Wrapper>
    </CarrouselCards>
  );
};

export default Carousel;
