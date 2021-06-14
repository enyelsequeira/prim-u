import {
  FooterList,
  FooterSection,
  FooterTitles,
  MiniSectionWrapper,
  RightSection,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterSection px={[20, 20, 40, 40, "0px"]}>
      <MiniSectionWrapper>
        <FooterTitles condensed fontSize={[18, , 18]} lineHeight={["sub", , "sub"]} pt={[60, 0]}>
          Prim-U app © {new Date().getFullYear()}{" "}
        </FooterTitles>
        <FooterList>PRIM-U App</FooterList>
        <FooterList>PRIM-U Privacy Policy</FooterList>
        <FooterList>Prim-U User Generated Content Policy</FooterList>
        <FooterList>Prim-U Website Terms of Use</FooterList>
      </MiniSectionWrapper>

      <RightSection>
        <MiniSectionWrapper extra>
          <FooterTitles condensed fontSize={[18, , 18]} lineHeight={["sub", , "sub"]} pt={[60, 0]}>
            Contact us
          </FooterTitles>
          <FooterList>hello@prim-u.com</FooterList>
          <FooterList>+31-123-45-67</FooterList>
        </MiniSectionWrapper>

        <MiniSectionWrapper>
          <FooterTitles condensed fontSize={[18, , 18]} lineHeight={["sub", , "sub"]} pt={[60, 0]}>
            Follow Us
          </FooterTitles>
          <FooterList>Facebook</FooterList>
          <FooterList>Twitter</FooterList>
          <FooterList>LinkedIn</FooterList>
          <FooterList>YouTube</FooterList>
          <FooterList>Instagram</FooterList>
        </MiniSectionWrapper>
      </RightSection>
    </FooterSection>
  );
};

export default Footer;
