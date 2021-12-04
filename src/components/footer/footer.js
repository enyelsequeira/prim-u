import Link from "next/link";
import {
  FooterList,
  FooterSection,
  FooterTitles,
  MiniSectionWrapper,
  RightSection,
} from "./footer.styles";

const Footer = ({ policies }) => {
  return (
    <FooterSection px={[20, 20, 40, 40, "0px"]} id="contacts">
      <MiniSectionWrapper>
        <FooterTitles condensed fontSize="18px" lineHeight="sub">
          Prim-U app © {new Date().getFullYear()}{" "}
        </FooterTitles>
        <FooterList>
          <Link href="/">
            <a> PRIM-U App</a>
          </Link>
        </FooterList>

        {policies &&
          policies.map((policy) => {
            return (
              <FooterList>
                <Link href={`/policies/${policy.slug}`}>
                  <a>{policy.title}</a>
                </Link>
              </FooterList>
            );
          })}
      </MiniSectionWrapper>

      <RightSection>
        <MiniSectionWrapper extra>
          <FooterTitles condensed fontSize="18px" lineHeight="sub">
            Contact us
          </FooterTitles>
          <FooterList>
            <a href="mailto:info@prim-u.com" target="_blank" rel="noreferrer">
              {" "}
              info@prim-u.com
            </a>
          </FooterList>
          <FooterList>
            <a href="tel:+27-0600703045">+27-0600703045</a>
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
