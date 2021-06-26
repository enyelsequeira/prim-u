import styled from "styled-components";
import { GlobalCard } from "../global-components";

export const Main = styled.section`
  padding: 60px 4vw 0;
  @media screen and (max-width: 767.9px) {
    padding: 20px 10px 0;
  }
`;

export const BannerCard = styled(GlobalCard)`
  max-width: 1320px;
  min-height: 643px;
`;
