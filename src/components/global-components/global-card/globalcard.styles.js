import Image from "next/image";
import styled from "styled-components";
import { GlobalButton, GlobalTitle } from "../global-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  padding: 60px 4vw;
  z-index: 0;
  @media screen and (max-width: 1124px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    row-gap: 40px;
    padding: 32px;
  }
  @media screen and (max-width: 640px) {
    padding: 36px 16px 24px;
    justify-content: flex-start;
    row-gap: 40px;
  }
`;

export const Wrapper = styled.div.attrs({ className: "image-wrapper" })`
  position: absolute;
  background-color: ${(props) => props.theme.colors.black};
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const Img = styled(Image).attrs({ className: "img" })`
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
  transition: all 0.2s;
`;

export const Body = styled.div.attrs({ className: "body" })`
  position: relative;
  display: grid;
  max-width: 584px;
  flex: 1;
  @media screen and (max-width: 640px) {
    max-width: 410px;
  }
`;

export const Title = styled(GlobalTitle).attrs({ className: "title" })`
  font-size: 50px;
  line-height: 59px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 264px;
  @media screen and (max-width: 1124px) {
    margin-bottom: 164px;
  }
  @media screen and (max-width: 640px) {
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 231px;
  }
`;

export const SubTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 32px;
  @media screen and (max-width: 640px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const Text = styled(SubTitle).attrs({ className: "text" })`
  margin: 0;
  align-self: end;
  display: inline-block;
  white-space: ${(props) => (props.services ? "pre-line" : "")};
  &:nth-child(2) {
    margin-bottom: ${(props) => (props.hasSubtitle ? "32px" : "0")};
  }
  @media screen and (max-width: 640px) {
    &:nth-child(2) {
      margin-bottom: ${(props) => (props.hasSubtitle ? "20px" : "0")};
    }
  }
`;

export const Button = styled(GlobalButton).attrs({ className: "button" })`
  & {
    align-self: flex-end;
  }
  @media screen and (max-width: 1124px) {
    & {
      align-self: flex-start;
    }
  }
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;
