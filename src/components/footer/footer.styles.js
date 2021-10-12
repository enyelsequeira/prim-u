import styled from "styled-components";
import { space } from "styled-system";
import { GlobalSubtitle } from "../global-components";

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1440px;
  padding: 40px 10vw 60px 4vw;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    padding: 40px 78px 60px 4vw;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    padding: 40px 0 60px;
  }
`;
export const MiniSectionWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterTitles = styled(GlobalSubtitle)`
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 20px;
  text-align: inherit;
  text-transform: uppercase;
  width: 100%;
  ${space}
`;

export const FooterList = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 10px;
  > a {
    font-size: inherit;
    line-height: inherit;
  }
`;

export const RightSection = styled.div`
  display: flex;
  gap: 116px;
  @media only screen and (max-width: 1024px) {
    gap: 50px;
  }

  @media only screen and (max-width: 768px) {
    display: contents;
  }
`;
