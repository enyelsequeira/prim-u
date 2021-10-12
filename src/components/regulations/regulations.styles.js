import styled from "styled-components";

export const Main = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  max-width: 1320px;
  border-radius: 20px;
  width: 92%;
  z-index: 9999;
  background-color: ${(props) => props.theme.colors.purple};
  /* border: 2px solid red; */
  position: absolute;
  top: 60px;
  left: 59px;
  @media screen and (max-width: 767.9px) {
    padding: 20px 10px 0;
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
