import styled from "styled-components";

export const CarrouselCards = styled.div`
  display: grid;
  overflow-x: scroll;

  scroll-behavior: smooth;
  grid-auto-flow: column;
  width: 80vw;
  gap: 40px;
  margin: 60px auto 30px auto;
  cursor: pointer;
  position: relative;
  

  scroll-snap-type: both mandatory;

  &::-webkit-scrollbar {
    height: 2px;
  }

  /* Track */

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    margin: 94px;
    background: #c4c4c4;
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 2px;
  }
  @media only screen and (max-width: 1024px) {
    margin: 40px auto 30px auto;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin: 40px 0 30px 0;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 10px 38px 10px;
  }
`;

export const AngleContainer = styled.div`
  width: 80vw;
  height: 1px;
  margin: 0 auto;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
`;

export const Angle = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  bottom: 28px;

  &:first-child {
    left: 50px;
    @media only screen and (max-width: 500px) {
        left: 10px;
  }
    @media only screen and (max-width: 375px) {
        left: 20px;
}
  }

  &:nth-child(2) {
    align-self: flex-end;
    right: 50px;
    top: -17px;
    @media only screen and (max-width: 500px) {
        right: 10px;
  }
    @media only screen and (max-width: 375px) {
        right: 20px;
  }
  }
`;
