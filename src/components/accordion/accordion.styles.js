import styled from "styled-components";

export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;

export const FaqQuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  padding: 30px 0 60px 0;
`;

export const ShowMore = styled.button`
  padding: 11px 118px;
  display: flex;
  align-self: center;
  width: fit-content;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  margin: 100px auto;
  transition: 0.9s;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
`;
