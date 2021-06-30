import styled from "styled-components";

export const CarrouselCards = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 80px;
  @media only screen and (max-width: 767.9px) {
    margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  overflow-x: auto;
  scroll-behavior: smooth;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  column-gap: 40px;
  scroll-snap-type: both mandatory;
  padding-left: 4vw;

  &::-webkit-scrollbar {
    display: block;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    margin: 23.9vw;

    background: #c4c4c4;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 2px;
  }
  @media only screen and (max-width: 1024px) {
    gap: 24px;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 10px;
    &::-webkit-scrollbar-track {
      margin: 15vw;
    }
  }
  @media only screen and (max-width: 640px) {
    padding-left: 10px;
    gap: 16px;
  }
`;

export const AngleLeft = styled.button`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  left: 21vw;
  bottom: 1px;
  transform: translateY(50%);
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 2L2 8.5L8.5 15' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 6.5px 13px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 768px) {
    left: 8vw;
  }
`;

export const AngleRight = styled(AngleLeft)`
  left: auto;
  right: 21vw;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 2L8 8.5L1.5 15' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

  @media only screen and (max-width: 768px) {
    right: 8vw;
  }
`;
