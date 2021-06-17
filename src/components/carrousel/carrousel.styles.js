import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCards = styled.div`
  display: grid;
  /* overflow-x: hidden; */
  overflow-x: scroll;
  /* scrollbar-width: none;
  -ms-overflow-style: none; */
  scroll-behavior: smooth;
  /* grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr; */
  grid-auto-flow: column;
  width: 80vw;
  gap: 40px;
  margin: 60px auto 30px auto;
  /* cursor: pointer; */
  position: relative;
  padding-bottom: 40px;

  /* &:active {
    cursor: grabbing;
  } */

  scroll-snap-type: both mandatory;

 &::-webkit-scrollbar {
  height: 2px;
}

/* Track */
&::-webkit-scrollbar-track {
  border-radius: 2px;
  margin: 94px;
  background: #C4C4C4;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: 2px;
  //border-right: 17px green solid;
  //border-left: 17px green solid;
  //background-clip: padding-box;
  //box-shadow: inset -10px 0px 0px 0px green;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}



  /* @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 30px;
  } */
  /* @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`;

export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 520px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  scroll-snap-align: center;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};

  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;

export const ReviewText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};

  text-align: left;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;

export const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const SliderContainer = styled.div`
  width: 743px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  margin-bottom: 40px;
`;

export const Range = styled.input`
  width: 100%;
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  outline: none;
  background: #c4c4c4;
  border-radius: 2px;
  margin: auto 35px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 300px;
    height: 2px;
    background: #000000;
    border-radius: 20px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 300px;
    height: 2px;
    background: #04aa6d;
    cursor: pointer;
  }
`;

export const Angle = styled.button`
  all: unset;
  align-self: center;
  margin: auto;
  cursor: pointer;
  &:disabled {
    background-color: yellow;
  }
`;
