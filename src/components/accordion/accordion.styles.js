import styled, { css } from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const Main = styled.section`
  padding: ${(props) => (props.type ? "80px 4vw" : "20px 4vw 80px")};
  @media screen and (max-width: 767.69px) {
    padding: ${(props) => (props.type ? "60px 20px" : "20px 20px 60px")};
  }
`;

export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  gap: 4vw;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: grid;
  gap: 60px;
  grid-auto-rows: max-content;
  @media only screen and (max-width: 768px) {
    gap: 40px;
  }
`;

export const FaqQuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${width}
  & p {
    flex: 1;
  }
`;

export const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;
`;

export const ButtonIcon = styled.button`
  all: unset;
  position: relative;
  width: 24px;
  height: 24px;
  ${(props) =>
    props.visible
      ? css`
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='4' viewBox='0 0 24 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='3.5' width='3' height='24' transform='rotate(-90 0 3.5)' fill='black'/%3E%3C/svg%3E");
        `
      : css`
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10.5' width='3' height='24' fill='black'/%3E%3Crect y='13.5' width='3' height='24' transform='rotate(-90 0 13.5)' fill='black'/%3E%3C/svg%3E");
        `}
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const Answer = styled.p`
  max-width: 630px;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  padding-top: ${(props) => (props.visible ? "30px" : 0)};
  height: max-content;
  max-height: ${(props) => (props.visible ? "100vh" : 0)};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.1s 0.05s, max-height 0.1s;
  ${lineHeight};
  ${space};
  ${fontSize};
`;

export const ShowMore = styled.button`
  all: unset;
  position: relative;
  display: flex;
  align-self: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  transition: 0.3s;
  ${lineHeight};
  ${space};
  ${fontSize};
  padding: 15px 118px;
  margin-top: 100px;
  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    transition: 0s;
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px 57px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 768px) {
    width: min(100%, 600px);
    padding: 15px 0;
    margin-top: 60px;
  }
`;
