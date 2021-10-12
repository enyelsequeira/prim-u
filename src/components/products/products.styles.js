import styled from "styled-components";
import { fontSize, lineHeight, space } from "styled-system";
import { GlobalSection } from "../global-components";

export const GlobalSectionStyled = styled(GlobalSection)`
  max-width: 100%;
  margin: 0;
  padding: 80px 0;
  @media only screen and (max-width: 640px) {
    padding: 60px 0px 80px;
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
  scroll-snap-align: center;
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

export const BeautyButton = styled.button`
  display: flex;
  align-self: center;
  align-content: center;
  justify-content: center;
  max-width: 400px;
  height: 60px;
  background: ${({ theme }) => theme.colors.purple};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  ${lineHeight};
  ${space};
  ${fontSize};
  padding: 16px 0;
  margin: 80px auto 0 auto;
  margin-top: max(55px, 5.5vw);
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    max-width: 300px;
    font-size: 20px;
  }
`;
