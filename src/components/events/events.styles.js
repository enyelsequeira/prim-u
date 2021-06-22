import styled from "styled-components";
import { GlobalCard } from "../global-components";
import { Main as Section } from "../services/services.styles";

export const Main = styled(Section)`
  @media screen and (max-width: 767.9px) {
    padding-top: 40px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  row-gap: 60px;
  margin-top: 60px;
  @media screen and (max-width: 1124px) {
    row-gap: 40px;
  }
  @media screen and (max-width: 767.9px) {
    row-gap: 20px;
  }
`;

export const EventCard = styled(GlobalCard)`
  min-height: 460px;
  padding: 40px 4vw;
  & .title {
    margin-bottom: 209px;
  }
  @media screen and (max-width: 1124px) {
    & .title {
      margin-bottom: 119px;
    }
  }
  @media screen and (max-width: 640px) {
    padding: 30px 20px 20px;
    row-gap: 16px;
    & .body {
      max-width: 350px;
    }
    & .title {
      margin-bottom: 173px;
    }
    & .text {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
