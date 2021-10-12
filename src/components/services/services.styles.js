import styled from "styled-components";
import { GlobalCard, GlobalTitle } from "../global-components";

export const Main = styled.section`
  padding: 100px 4vw;
  @media screen and (max-width: 767.69px) {
    padding: 60px 10px;
  }
`;

export const Title = styled(GlobalTitle)`
  font-size: 50px;
  line-height: 59px;
  @media screen and (max-width: 767.9px) {
    padding-left: 10px;
    font-size: 34px;
    line-height: 40px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 29px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 4vw;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(172px, 27.78vw);
  max-width: 1320px;
  margin-top: 60px;
  @media only screen and (max-width: 1024px) {
    gap: 3vw;
  }
  @media only screen and (max-width: 767.9px) {
    grid-gap: 10.5px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }
  @media only screen and (max-width: 360px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }
`;

export const ServiceCard = styled(GlobalCard)`
  cursor: pointer;
  padding: 0 25px;
  & .body {
    place-items: center;
  }
  & .title {
    margin: 0;
    font-size: 38px;
    line-height: 45px;
    text-align: center;
  }
  & .button {
    display: none;
  }
  &:hover .img {
    opacity: 0.75;
  }
  @media screen and (max-width: 767.9px) {
    padding: 0 15px;
    & .title {
      font-size: 30px;
      line-height: 35px;
    }
  }
`;
