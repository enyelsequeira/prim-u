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
  @media only screen and (max-width: 1024px) {
    margin: 40px auto 30px auto;
  }

  @media only screen and (max-width: 500px) {
    width: 95vw;
    margin: 40px 0 30px 0;
  }

`;
export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 400px;
  height: 470px;
  border-radius: 20px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 434px;
    height: 268px;
  }

  @media only screen and (max-width: 500px) {
    width: 355px;
    height: 288px;  
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 220px;
`;

export const InfoWrapper = styled.div`
  width: 400px;
  height: 220px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;

export const ProductText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};

  text-align: left;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;
export const Price = styled.div`
  width: 79px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  ${lineHeight};
  ${space};
  ${fontSize};
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
