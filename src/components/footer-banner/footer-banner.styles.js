import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";
import { ShowMore } from "../accordion/accordion.styles";
import { GlobalSection, GlobalSubtitle } from "../global-components";

export const FooterBannerContainer = styled(GlobalSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterImageWrapper = styled.div`
  @media only screen and (max-width: 640px) {
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 630px;
  @media only screen and (max-width: 1280px) {
    width: fit-content;
  }
  @media only screen and (max-width: 1024px) {
    align-self: center;
    width: fit-content;
  }
`;

export const InfoText = styled(GlobalSubtitle)`
  font-weight: normal;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    text-align: left;
  }
`;

export const Subscribe = styled(ShowMore)`
  display: flex;
  align-self: flex-start;
  margin-top: 60px;
  ${width}
  ${space}
  ${fontSize}
  ${lineHeight}
   @media only screen and (max-width: 768px) {
    padding: 16px 105px;
    margin: auto;
    margin-top: 40px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 11px 120px;
    /* margin: auto; */
    margin-top: 20px;
  }

  @media only screen and (max-width: 640px) {
    padding: 16px 105px;
    margin: auto;
    margin-top: 30px;
  }
`;
