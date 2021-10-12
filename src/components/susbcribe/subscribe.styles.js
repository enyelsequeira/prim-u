import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";
import { ShowMore } from "../accordion/accordion.styles";
import { GlobalSection } from "../global-components";

export const SubscribeContainer = styled(GlobalSection)`
  display: grid;
  grid-template-columns: max(400px, calc(40vw + 100px)) 1fr;
  /* grid-template-rows: max(400px, calc(40vw + 54px)); */
  gap: 4vw;
  max-width: 100%;
  width: 100%;
  padding: 20px 4vw 100px;
  place-items: center;
  margin: 0;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px 25px 100px;
    gap: 30px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: 20px 20px 80px;
    gap: 2vw;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    text-align: left;
  }
`;

export const SubscribeBtn = styled(ShowMore)`
  display: flex;
  place-items: center;
  && {
    align-self: flex-start;
  }
  margin-top: 60px;
  ${width}
  ${space}
  ${fontSize}
  ${lineHeight}
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  @media only screen and (max-width: 1024px) {
    padding: 15px 120px;
  }
  @media only screen and (max-width: 768px) {
    margin: auto;
    margin-top: 40px;
    padding: 15 105px;
    width: fit-content;

    && {
      align-self: center;
    }
  }
`;
