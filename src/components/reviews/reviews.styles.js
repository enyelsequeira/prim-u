import styled from "styled-components";
import { GlobalSection } from "../global-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const GlobalSectionStyled = styled(GlobalSection)`
  max-width: 100%;
  margin: 0;
  padding-left: 60px;
  padding-bottom: 80px;

  @media only screen and (max-width: 1024px) {
    padding-left: 40px;
  }
  @media only screen and (max-width: 1024px) {
    padding-left: 40px;
    padding-top: 60px;
  }
  @media only screen and (max-width: 375px) {
    padding-left: 10px;
    padding-top: 20px;
  }
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
