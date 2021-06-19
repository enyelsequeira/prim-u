import styled from "styled-components";
import { GlobalTitle } from "../global-components";
import Image from 'next/image'

export const Main = styled.main`
  position: relative;
  padding: 0 4vw;
  width: 100%;
  height: 700px;
  /* background-image: url("images/hero.jpg");
  background-repeat: no-repeat;
  background-size: auto 946px;
  background-position-x: 29vw;
  background-position-y: -210px;
  background-color: black; */
  background-color: black;
  z-index: 0;
  /* perspective: 1000px; */
  @media screen and (max-width: 1024px) {
    /* background-position-x: 25.5vw; */
  }
  @media screen and (max-width: 767.9px) {
    /* background-size: auto 685px;
    background-position-x: center;
    background-position-y: 110px; */
    padding: 0 7px;
  }
`;

export const Img = styled(Image)`
  position: absolute;
  /* transform-style: preserve-3d; */
  /* transform: scale(.62, 1.35) translate(328px, -60px); */
  /* transform: scale(.62, 1.35) translate(23vw, -60px); */
  /* min-width: 1440px !important; */
  /* min-height: 80% !important; */
  /* transform: scale(.6, 1.35) translate(26vw, -59px); */
  transform: scale(.65, 1.35);
  min-width: 1440px !important;
  left: 13vw !important;
  top: -165px !important;
  /* transform: scale(.65, 1.35) translate(21vw, -59px); */
  object-position: center;
  /* object-fit: contain; */
  /* object-fit: cover; */
  /* object-position: center; */
  z-index: -1;
  /* object-position: center -62px; */
  /* transform: scale(1.37) translateX(135px); */
    /* transform: scale(1) translateY(151px); */
  @media screen and (max-width: 1024px) {
    /* transform: scale(.65, 1.35) translate(4vw, -59px); */
    /* transform: scale(.85,1.35) translate(28vw,-59px); */
    left: 1vw !important;
  }
  @media screen and (max-width: 767.9px) {
    left: 50% !important;
    transform: translate(-50%, 180px);
    min-width: 700px !important;
  }
`

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
