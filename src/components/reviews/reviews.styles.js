import styled from "styled-components";
import { GlobalSection } from "../global-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const GlobalSectionStyled = styled(GlobalSection)`
  max-width: 100%;
  margin: 0;
  /* padding-left: 60px; */
  /* padding-bottom: 80px;
  padding-top: 60px; */
  padding: 80px 0;

  /* @media only screen and (max-width: 1024px) {
    padding-left: 40px;
  }
  @media only screen and (max-width: 1024px) {
    padding-left: 40px;
  } */
  @media only screen and (max-width: 640px) {
    padding: 60px 10px 80px;
  }
`;


export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 520px;
  min-height: max-content;
  border-radius: 20px;
  /* overflow: hidden; */
  /* display: inline-block; */
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
  @media only screen and (max-width: 1024px) {
    width: 434px;
    /* min-height: min-content; */
    /* min-height: 268px; */
  }
  @media only screen and (max-width: 500px) {
    /* max-width: calc(100vw - 32px); */
    max-width: 88vw;
    /* min-height: 288px; */
  }
  @media only screen and (max-width: 360px) {
    /* max-width: 300px; */
    /* min-height: 288px; */
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
  gap: 10px;
`;
