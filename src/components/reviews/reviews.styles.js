import styled from "styled-components";
import { GlobalSection } from "../global-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const GlobalSectionStyled = styled(GlobalSection)`
  max-width: 100%;
  margin: 0;
  padding-left: 0;
  padding-bottom: 80px;
  padding-top: 80px;

  
  @media only screen and (max-width: 1024px) {
    
    padding-top: 60px;
  }
  @media only screen and (max-width: 375px) {
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
  padding: 18px 31px 34px 20px;
  line-height: 28px;
  ${space};
  ${fontSize};
  ${width};
  @media only screen and (max-width: 500px) {
    width: 323px;
    padding: 20px 16px 24px 16px;
  }

`;
export const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  right: 30px;
`;
