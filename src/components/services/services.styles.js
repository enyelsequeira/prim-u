import styled from "styled-components";
import { GlobalSubtitle, GlobalCard } from "../global-components";

export const Main = styled.main`
  padding: 100px 4vw;
  @media screen and (max-width: 767.69px) {
    padding: 60px 10px;
  }
`;

export const Container = styled.div`
  display: grid;
  /* grid-gap: 60px; */
  grid-gap: 4vw;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(172px, 27.78vw);
  /* grid-auto-rows: 27.78vw; */
  max-width: 1320px;
  margin-top: 60px;
  /* grid-auto-rows: 400px; */
  /* padding: 60px 4vw 100px; */
  /* background-color: white; */
  /* margin: 60px 0 100px 0; */

  @media only screen and (max-width: 1024px) {
    /* gap: 40px; */
    gap: 3vw;
    /* margin: 60px 0 0 0; */
  }

  @media only screen and (max-width: 767.9px) {
    grid-gap: 10.5px;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: 27.78vw; */
    /* grid-template-rows: repeat(3, 1fr); */
    margin: 60px auto 0px auto;
  }
  @media only screen and (max-width: 360px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }
`;

export const ServiceCard = styled(GlobalCard)`
  /* width: 100%;
  height: 400px; */
  cursor: pointer;
  /* filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2)); */
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
  &:hover .img{
    opacity: .75;
  } 

  @media screen and (max-width: 767.9px) {
    padding: 0 15px;
    & .title {
      font-size: 30px;
      line-height: 35px;
    }
  }
`;



export const Card = styled.div`
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  src: ${(props) => props.src};
`;

export const CardTitle = styled(GlobalSubtitle)`
  align-self: center;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  position: absolute;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;
