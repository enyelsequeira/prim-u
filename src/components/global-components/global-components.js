/* eslint-disable no-shadow */
import styled, { css } from "styled-components";
import { fontSize, lineHeight, space, textAlign, typography, width } from "styled-system";

export const GlobalWrapper = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;

export const GlobalSection = styled.section`
  max-width: 1320px;
  margin: auto;
  ${space}
  ${fontSize}
  ${lineHeight}
  ${width}
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `};
`;

export const GlobalTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  ${fontSize}
  ${space}
  ${lineHeight}
  ${width}
  ${textAlign}

 ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `};
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `};
  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `};
  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl};
    `};
  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr};
    `};
`;

export const SpanTitle = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.condensed};

  text-transform: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
`;

export const GlobalSubtitle = styled.p`
  font-family: ${({ theme, condensed }) =>
    condensed ? theme.fonts.condensed : theme.fonts.roboto};
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.01em;
  ${fontSize};
  ${space};
  ${lineHeight};
  ${width}/* in case we need to pass different props */;

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `};
  color: ${({ theme, white }) => (white ? theme.colors.white : theme.colors.black)};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
  ${(props) =>
    props.border &&
    css`
      border-bottom: ${props.border};
    `};
  width: ${({ width }) => width || "fit-content"};
  ${(props) =>
    props.padding &&
    css`
      padding-bottom: ${props.padding};
    `};
  ${(props) =>
    props.maxW &&
    css`
      max-width: ${props.maxW};
    `};
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  ${space};
`;

export const GlobalButton = styled.a`
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.purple};
  font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  max-width: 315px;
  width: 100%;
  height: 60px;
  &:hover {
    background: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const PageWrapper = styled.div`
  margin: 5vw 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767.69px) {
    margin: 10vw 0;
  }
`;

export const PageTitles = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;

  ${space}
  ${typography}
  ${width}
`;

export const PageTitle = styled.h1`
  ${space}
  ${fontSize}
  ${typography}
  ${width}
   font-family: ${(props) => props.theme.fonts.roboto};
  color: ${(props) => props.theme.colors.purple};
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  @media screen and (max-width: 767.69px) {
  }
`;

export const InfoWrapper = styled.div`
  width: ${(props) => (props.body ? "90%" : "80%")};
  margin: 1rem auto;
  display: flex;
  padding: ${(props) => (props.body ? "0 2rem" : "")};
  flex-direction: column;
  @media screen and (max-width: 767.69px) {
    width: 100%;
    padding: 0.4rem;
  }
`;

export const Information = styled.p`
  ${space}
  ${fontSize}
  ${typography}
  ${width}
   font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
`;

export const List = styled.ul`
  list-style-type: circle !important;
`;

export const ListItem = styled.li`
  ${space}
  ${fontSize}
  ${typography}
  ${width}
   font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  list-style: circle !important;
  text-align: justify;
`;

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  td {
    border: 1px solid black;
  }
`;
