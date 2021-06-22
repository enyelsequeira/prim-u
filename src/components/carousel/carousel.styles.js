import styled from "styled-components";

export const CarrouselCards = styled.div`
  display: grid;
  overflow-x: auto;
  scroll-behavior: smooth;
  grid-auto-flow: column;
  max-width: 1440px;
  gap: 40px;
  margin: 60px auto 30px auto;
  cursor: pointer;
  position: relative;
  padding-bottom: 38px;
  scroll-snap-type: both mandatory;
  &::-webkit-scrollbar {
    height: 2px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    margin-right: calc(200px + 4vw);
    /* margin-right: 200px; */
    margin-left: 200px;
    background: #c4c4c4;
    @media only screen and (max-width: 1024px) {
      margin: 150px;
    }
    @media only screen and (max-width: 375px) {
      margin: 50px;
    }
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 2px;
  }
  @media only screen and (max-width: 1024px) {
    margin: 40px 40px 30px 40px;
    gap: 24px;
  }
  @media only screen and (max-width: 500px) {
    width: 95vw;
    margin: 40px 10px 30px 10px;
    gap: 16px;
  }
`;
export const AngleContainer = styled.div`
  max-width: 1440px;
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
  bottom: 29px;
  &:first-child {
    left: 100px;
    @media only screen and (max-width: 375px) {
      left: 20px;
    }
  }
  &:nth-child(2) {
    align-self: flex-end;
    right: 100px;
    top: -18px;
    @media only screen and (max-width: 375px) {
      right: 20px;
    }
  }
`;
