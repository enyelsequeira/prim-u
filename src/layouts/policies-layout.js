import { Footer, NavBar } from "../components";
import {
  Information,
  InfoWrapper,
  PageTitle,
  PageTitles,
  PageWrapper,
} from "../components/global-components";
import BaseLayout from "./base";

const PoliciesLayout = ({ data, children, footerLinks }) => {
  return (
    <BaseLayout>
      <NavBar />
      <PageWrapper>
        <PageTitles>
          <PageTitle fontSize="2.5rem">PrimU InfoTech (PTY) Ltd</PageTitle>
          <PageTitle fontSize="2.5rem">Reg: 2017/50723/06</PageTitle>
          <PageTitle fontSize="3.5rem" textAlign="center">
            {data.title}
          </PageTitle>
        </PageTitles>
        <InfoWrapper>
          <Information fontSize="2rem">{data.introduction}</Information>
        </InfoWrapper>
        <InfoWrapper body>{children}</InfoWrapper>
      </PageWrapper>

      <Footer pages={footerLinks} extra />
    </BaseLayout>
  );
};

export default PoliciesLayout;
