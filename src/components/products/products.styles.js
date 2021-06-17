import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCards = styled.div`
  display: grid;
  overflow-x: scroll;

  scroll-behavior: smooth;
  grid-auto-flow: column;
  width: 80vw;
  column-gap: 40px;
  margin: 60px auto 30px auto;
  cursor: pointer;
  position: relative;
  padding-bottom: 38px;

  scroll-snap-type: both mandatory;

  &::-webkit-scrollbar {
    height: 2px;
  }

/* Track */
&::-webkit-scrollbar-track {
  border-radius: 2px;
  margin: 0 94px;
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
    height: 568px;
    gap: 16px;
  }

`;
export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 400px;
  height: 470px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  ${lineHeight};
  ${space};
  ${fontSize};

  @media only screen and (max-width: 1024px) {
    width: 284px;
    height: 508px;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 220px;
  display: flex; 
  @media only screen and (max-width: 1024px) {
    width: 284px;
  }
`;

export const InfoWrapper = styled.div`
  width: 400px;
  height: 250px;
  @media only screen and (max-width: 1024px) {
    width: 284px;
    height: 288px;
  }

`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 24px;
  ${lineHeight};
  ${space};
  ${fontSize};

  @media only screen and (max-width: 1024px) {
    margin: 20px 0 0 16px;
  }
`;

export const ProductText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin: 14px 0 30px 24px;
  text-align: left;
  width: 352px;
  ${lineHeight};
  ${space};
  ${fontSize};

  @media only screen and (max-width: 1024px) {
    width: 252px;
    margin: 14px 0 20px 16px;
  }
`;

export const PriceContainer = styled.div`
  width: 79px;
  height: 34px;
  margin: 0 0 30px 24px;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  padding: auto;
  background-color: ${({ theme }) => theme.colors.purple};
  @media only screen and (max-width: 1024px) {
    margin: 0 0 26px 16px;
  }

  @media only screen and (max-width: 375px) {
    margin: 0 0 26px 16px;
  }
`;

export const Price = styled.p`
  width: 47px;
  margin: auto;
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
