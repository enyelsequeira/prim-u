import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  @media only screen and (max-width: 768px) {
    gap: 15px;
  }
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    display: flex;
    gap: 40px;
  }
  @media only screen and (max-width: 1024px) {
    gap: 42px;
  }
`;

export const FaqQuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${width}
`;

export const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Answer = styled.p`
  max-width: 630px;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  ${lineHeight};
  ${space};
  ${fontSize};
`;

export const ShowMore = styled.button`
  display: flex;
  align-self: center;
  width: fit-content;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  transition: 0.9s;
  ${lineHeight};
  ${space};
  ${fontSize};
  padding: 11px 118px;
  margin-top: 100px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 105px;
    margin-top: 60px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 11px 57px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 640px) {
    padding: 16px 105px;
    margin-top: 60px;
  }
  /* @media only screen and (max-width: 1440px) {
    padding: 11px 118px;
    margin-top: 100px;
  } */
`;
