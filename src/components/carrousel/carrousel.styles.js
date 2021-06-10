import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCards = styled.div`
  display: grid;
  overflow-x: scroll;
  overscroll-behavior-x: initial;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
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
