import styled from "styled-components";
import { GlobalSection } from "../global-components";
import { fontSize, lineHeight, space, width } from "styled-system";
import { Title as title } from "../services/services.styles";

export const Main = styled.main`
  padding: 80px 0 80px 4vw;
  @media screen and (max-width: 767.69px) {
    padding: 60px 10px;
  }
`

export const Title = styled(title)`
  text-align: center;
`

export const GlobalSectionStyled = styled(GlobalSection)`
  max-width: 100%;
  margin: 0;
  padding: 80px 0;
  @media only screen and (max-width: 640px) {
    padding: 60px 10px 80px;
  }
`;


export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 520px;
  min-height: max-content;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
  scroll-snap-align: center;
  @media only screen and (max-width: 1024px) {
    width: 434px;
  }
  @media only screen and (max-width: 500px) {
    max-width: 88vw;
  }
  @media only screen and (max-width: 360px) {
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
