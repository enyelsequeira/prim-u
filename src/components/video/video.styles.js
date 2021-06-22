import styled from "styled-components";
import { GlobalTitle } from "../global-components";

export const Main = styled.section`
  padding: 100px 25px 80px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 640px) {
    padding: 80px 10px 60px;
  }
`;

export const Container = styled.div`
  display: grid;
  row-gap: 60px;
  justify-items: center;
  flex: 1;
  @media screen and (max-width: 640px) {
    row-gap: 40px;
  }
`;

export const Title = styled(GlobalTitle)`
  font-size: 50px;
  line-height: 59px;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 34px;
    line-height: 40px;
  }
`;

export const VideoElement = styled.div`
  position: relative;
  max-width: 880px;
  width: 100%;
  height: 449px;
  border-radius: 20px;
  background-color: black;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  & iframe {
    width: 100%;
    height: inherit;
    border: 0;
    opacity: 0.6;
    border-radius: 20px;
  }
  & p {
    position: absolute;
    width: 100%;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
    font-family: ${(props) => props.theme.fonts.condensed};
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    user-select: none;
  }
  @media screen and (max-width: 640px) {
    height: 209px;
    margin-bottom: 70px;
    max-width: 355px;
    & p {
      top: 100%;
      margin-top: 40px;
      font-size: 34px;
      line-height: 40px;
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export const Button = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  width: 232px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  border-radius: 10px;
  font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.3s;
  cursor: pointer;
  @media screen and (max-width: 640px) {
    width: 100%;
    max-width: 335px;
  }
`;
