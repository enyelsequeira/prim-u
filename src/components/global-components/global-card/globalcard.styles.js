import Image from "next/image";
import styled from "styled-components";
import { GlobalButton, GlobalTitle } from "../global-components";

// export const Main = styled.main`
//   padding: 60px 4vw 20px;
//   @media screen and (max-width: 768px) {
//     padding: 20px 10px;
//   }
// `;
export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /* max-width: 1320px;
  min-height: 643px; */
  margin: auto;
  border-radius: 20px;
  padding: 60px 4vw;
  background-color: ${props => props.theme.colors.black};
  z-index: 0;
  /* background-color: rgba(0, 0, 0, 0.4); */
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

export const Img = styled(Image).attrs({ className: "img" })`
  position: absolute;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  opacity: .5;
  transition: all .2s;
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
  @media screen and (max-width: 640px) {
    display: contents;
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
