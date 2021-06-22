import { Divider } from "../global-components";
import {
  FooterList,
  FooterSection,
  FooterTitles,
  MiniSectionWrapper,
  RightSection,
} from "./footer.styles";

const Footer = () => {
  return (
    <>
      <Divider />
      <FooterSection px={[20, 20, 40, 40, "0px"]}>
        <MiniSectionWrapper>
          <FooterTitles condensed fontSize={[18, , 18]} lineHeight={["sub", , "sub"]} pt={[60, 0]}>
            Prim-U app © {new Date().getFullYear()}{" "}
          </FooterTitles>
          <FooterList>
            <a href="/"> PRIM-U App</a>
          </FooterList>
          <FooterList>
            <a href="">PRIM-U Privacy Policy</a>
          </FooterList>
          <FooterList>
            <a href="">Prim-U User Generated Content Policy</a>
          </FooterList>
          <FooterList>
            <a href="">Prim-U Website Terms of Use</a>
          </FooterList>
        </MiniSectionWrapper>

        <RightSection>
          <MiniSectionWrapper extra>
            <FooterTitles
              condensed
              fontSize={[18, , 18]}
              lineHeight={["sub", , "sub"]}
              pt={[60, 0]}>
              Contact us
            </FooterTitles>
            <FooterList>
              <a href="mailto:hello@prim-u.com"> hello@prim-u.com</a>
            </FooterList>
            <FooterList>
              <a href="tel=+31-123-45-67">+31-123-45-67</a>
            </FooterList>
          </MiniSectionWrapper>

          <MiniSectionWrapper>
            <FooterTitles
              condensed
              fontSize={[18, , 18]}
              lineHeight={["sub", , "sub"]}
              pt={[60, 0]}>
              Follow Us
            </FooterTitles>
            <FooterList>
              <a href="">Facebook</a>
            </FooterList>
            <FooterList>
              <a href="">Twitter</a>
            </FooterList>
            <FooterList>
              <a href="">LinkedIn</a>
            </FooterList>
            <FooterList>
              <a href="">YouTube</a>
            </FooterList>
            <FooterList>
              <a href="">Instagram</a>
            </FooterList>
          </MiniSectionWrapper>
        </RightSection>
      </FooterSection>
    </>
  );
};

export default Footer;
