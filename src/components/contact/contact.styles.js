import styled from "styled-components";
import { GlobalCard } from "../global-components";
import { Main as Section } from "../services/services.styles";

export const Main = styled(Section)`
  @media screen and (max-width: 767.9px) {
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 4vw;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 60px;

  @media only screen and (max-width: 767.9px) {
    margin-top: 40px;
  }

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`;

export const ContactCard = styled(GlobalCard)`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

  & .image-wrapper {
    height: 460px;
    height: max(326px, calc(25vw + 100px));
  }
  & .body {
    display: contents;
  }
  & .title {
    width: 100%;
    text-align: center;
    font-size: 38px;
    line-height: 45px;
    margin: 0;
    position: absolute;
    top: max(163px, calc((25vw + 100px) / 2));
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .button {
    position: absolute;
    width: 182px;
    height: 60px;
    top: max(163px, calc((25vw + 100px) / 2));
    left: 50%;
    transform: translateX(-50%);
    margin-top: 63px;
  }
  & .text {
    display: block;
    font-size: 20px;
    line-height: 28px;
    order: 1;
    color: ${(props) => props.theme.colors.black};
    margin-top: max(366px, calc(25vw + 140px));
  }
  @media screen and (max-width: 767.9px) {
    & .title {
      font-size: 34px;
      line-height: 40px;
      top: 116px;
      transform: translateX(-50%);
    }
    & .button {
      margin-top: 23px;
    }
    & .text {
      margin-top: 356px;
    }
  }
  @media screen and (max-width: 640px) {
    & .text {
      padding: 0 10px;
    }
  }
`;
