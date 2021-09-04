import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";
import { GlobalSection, GlobalSubtitle } from "../global-components";

export const FooterBannerContainer = styled(GlobalSection)`
  display: grid;
  grid-template-columns: max(400px, calc(40vw + 54px)) 1fr;
  grid-template-rows: max(400px, calc(40vw + 54px));
  gap: 4vw;
  max-width: 100%;
  width: 100%;
  padding: 80px 4vw 100px;
  margin: 0;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 80px 25px 100px;
    gap: 30px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: 60px 20px 80px;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    text-align: left;
  }
`;

export const FooterImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: min(100%, 450px);
    height: min(calc(100vw - 40px), 400px);
    margin: auto;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoText = styled(GlobalSubtitle)`
  width: 100%;
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  place-items: center;

  margin-top: 60px;
  ${width}
  ${space}
  ${fontSize}
  ${lineHeight} 
  @media only screen and (max-width: 768px) {
    margin-top: 40px;
    && {
      align-self: flex-start;
    }
  }
`;
