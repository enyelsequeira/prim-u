import styled from "styled-components";
import { space } from "styled-system";
import { GlobalSubtitle } from "../global-components";

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1440px;
  padding: 40px 145px 60px 60px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1280px) {
    padding: 40px 78px 60px 42px;
    justify-content: space-between;
    margin-top: 40px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 40px 20px 40px 20px;
  }
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 0px 60px 0px;
  }
`;
export const MiniSectionWrapper = styled.div`
  padding: ${({ extra }) => (extra ? "0 80px 0 80px;" : "")};
  @media only screen and (max-width: 1280px) {
    padding: ${({ extra }) => (extra ? "0 20px 0 20px;" : "")};
  }
  @media only screen and (max-width: 1024px) {
    padding: ${({ extra }) => (extra ? "0 20px 0 20px;" : "")};
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterTitles = styled(GlobalSubtitle)`
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 20px;
  ${space}
`;

export const FooterList = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 10px;
  > a {
    font-size: inherit;
    line-height: inherit;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 16px;
    padding-bottom: 12px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 10px;
  }
`;

export const RightSection = styled.div`
  @media only screen and (max-width: 1440px) {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    padding: 0 32px 0;
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    padding: 0 32px 0;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0;
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
