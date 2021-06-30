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
        <FooterTitles condensed fontSize="18px" lineHeight="sub">
          Prim-U app © {new Date().getFullYear()}{" "}
        </FooterTitles>
        <FooterList>
          <a href="https://prim-u.com/" target="_blank" rel="noreferrer">
            {" "}
            PRIM-U App
          </a>
        </FooterList>
        <FooterList>
          <a href="https://prim-u.com/privacy-policy/" target="_blank" rel="noreferrer">
            PRIM-U Privacy Policy
          </a>
        </FooterList>
        <FooterList>
          <a href="https://prim-u.com/ucg-policy/" target="_blank" rel="noreferrer">
            Prim-U User Generated Content Policy
          </a>
        </FooterList>
        <FooterList>
          <a href="https://prim-u.com/terms-of-use/" target="_blank" rel="noreferrer">
            Prim-U Website Terms of Use
          </a>
        </FooterList>
      </MiniSectionWrapper>

      <RightSection>
        <MiniSectionWrapper extra>
          <FooterTitles condensed fontSize="18px" lineHeight="sub">
            Contact us
          </FooterTitles>
          <FooterList>
            <a href="mailto:hello@prim-u.com"> hello@prim-u.com</a>
          </FooterList>
          <FooterList>
            <a href="tel=+31-123-45-67" target="_blank" rel="noreferrer">
              +31-123-45-67
            </a>
          </FooterList>
        </MiniSectionWrapper>

        <MiniSectionWrapper>
          <FooterTitles condensed fontSize="18px" lineHeight="sub">
            Follow Us
          </FooterTitles>
          <FooterList>
            <a href="https://www.facebook.com/PrimUApp/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </FooterList>
          <FooterList>
            <a href="https://twitter.com/Prim_UApp" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </FooterList>
          <FooterList>
            <a href="https://www.linkedin.com/company/prim-u/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </FooterList>
          <FooterList>
            <a
              href="https://www.youtube.com/channel/UCZI6IktmwuGpieR2xA8UvGA/videos"
              target="_blank"
              rel="noreferrer">
              YouTube
            </a>
          </FooterList>
          <FooterList>
            <a href="https://www.instagram.com/prim_uapp/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </FooterList>
        </MiniSectionWrapper>
      </RightSection>
    </FooterSection>
  );
};

export default Footer;
