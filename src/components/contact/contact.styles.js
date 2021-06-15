import styled from "styled-components";
import { fontSize, lineHeight, space } from "styled-system";
import { GlobalSubtitle } from "../global-components";

export const Container = styled.div`
  width: auto;
  margin: 60px 0 100px 0;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  @media only screen and (max-width: 670px) {
    gap: 0;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Card = styled.div`
  max-width: 630px;
  height: 430px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    z-index: 11;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 1024px) {
    max-width: 446px;
    height: 326px;
  }
  @media screen and (max-width: 670px) {
    max-width: 630px;
    height: 430px;
  }
  @media screen and (max-width: 400px) {
    min-width: 330px;
    height: 326px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

export const Title = styled(GlobalSubtitle)`
  align-self: center;
  text-transform: uppercase;
  z-index: 13;

  ${lineHeight};
  ${space};
  ${fontSize};
`;

export const Button = styled.button`
  align-self: center;
  margin: 40px auto 107px auto;
  z-index: 20;
  width: 182px;
  height: 60px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  background: #ffffff;
  ${lineHeight};
  ${space};
  ${fontSize};
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  @media only screen and (max-width: 1024px) {
    margin: 40px auto 40px auto;
  }
  @media only screen and (max-width: 670px) {
    margin: 40px auto 107px auto;
  }
  @media only screen and (max-width: 400px) {
    margin: 30px auto 80px auto;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-style: normal;
  font-weight: normal;
  max-width: 584px;
  margin-top: 40px;
  ${lineHeight};
  ${space};
  ${fontSize};
  @media only screen and (max-width: 768px) {
    margin: 30px 0 0 0;
    max-width: 446px;

    align-self: center;
  }
  @media only screen and (max-width: 500px) {
    text-align: justify;
  }
`;
