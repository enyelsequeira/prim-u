import Image from "next/image";
import styled from "styled-components";
import { GlobalTitle } from "../global-components";

export const Main = styled.section`
  position: relative;
  padding: 0 4vw;
  width: 100%;
  height: 700px;
  background-color: black;
  z-index: 0;
  @media screen and (max-width: 767.9px) {
    padding: 0 7px;
  }
`;

export const Img = styled(Image)`
  position: absolute;
  transform: scale(0.65, 1.35);
  min-width: 1440px !important;
  left: 13vw !important;
  top: -165px !important;
  object-position: center;
  z-index: -1;
  @media screen and (max-width: 1024px) {
    left: 1vw !important;
  }
  @media screen and (max-width: 767.9px) {
    left: 50% !important;
    transform: translate(-50%, 180px);
    min-width: 700px !important;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  height: 100%;
  margin: auto;
  @media screen and (max-width: 767.9px) {
    align-items: flex-start;
  }
`;

export const Title = styled(GlobalTitle)`
  font-size: 50px;
  line-height: 59px;
  width: 460px;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 767.9px) {
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    margin-top: 205px;
  }
  @media screen and (max-width: 640px) {
    width: 350px;
    margin-top: 218px;
  }
`;
