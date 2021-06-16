import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCards = styled.div`
  display: grid;
  overflow-x: scroll;
  
  scroll-behavior: smooth;
  grid-auto-flow: column;
  width: 80vw;
  gap: 40px;
  margin: 60px auto 30px auto;
  cursor: pointer;
  position: relative;
  padding-bottom: 40px;

  scroll-snap-type: both mandatory;
  &::-webkit-scrollbar {
  height: 2px;
  padding: 50px;
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
}
/* Handle on hover */
/* &::-webkit-scrollbar-thumb:hover {
} */
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

export const AngleContainer = styled.div`
  width: 80vw;
  height: 1px;
  margin: 0 auto;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
`;


export const Angle = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  bottom: 28px;

  &:first-child {
    left: 50px
  }

  &:nth-child(2) {
    align-self: flex-end;
    right: 50px;
    top: -17px;
  }

`;
