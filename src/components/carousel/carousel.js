import { useEffect, useRef, useState } from "react";
import { AngleLeft, AngleRight, CarrouselCards, Wrapper } from "./carousel.styles";

const Carousel = ({ children }) => {
  const carouselRef = useRef();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    carouselRef.current.addEventListener("scroll", (e) => {
      setPercent(Math.ceil(e.target.scrollLeft) / (e.target.scrollWidth - e.target.offsetWidth));
    });
    carouselRef.current.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) {
        e.currentTarget.scrollBy({
          left: Math.floor(
            e.target.getBoundingClientRect().left -
              (e.currentTarget.offsetWidth - e.target.getBoundingClientRect().width) / 2,
          ),
        });
      }
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
      <Wrapper ref={carouselRef}>{children}</Wrapper>
      <AngleLeft
        aria-label="angle left"
        onClick={() =>
          carouselRef.current.scrollBy({
            left: -200,
            behavior: "smooth",
          })
        }
        disabled={percent === 0}
      />
      <AngleRight
        aria-label="right angle"
        onClick={() =>
          carouselRef.current.scrollBy({
            left: 100,
            behavior: "smooth",
          })
        }
        disabled={percent >= 1}
      />
    </CarrouselCards>
  );
};

export default Carousel;
