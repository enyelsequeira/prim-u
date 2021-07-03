import Image from "next/image";
import { GlobalTitle, SpanTitle } from "../global-components/global-components";
import {
  FooterBannerContainer,
  FooterImageWrapper,
  InfoText,
  InfoWrapper,
  Subscribe,
} from "./footer-banner.styles";

const FooterBanner = ({ data }) => {
  //* uncessary logic, might remove if need be
  let filteredTitle = "";
  let spanText = "";

  const gettingData = (fields, word) => {
    const array = fields.split(" ");
    if (array.includes(word)) {
      spanText = word;
      filteredTitle = array.join(" ").replace(word, "");
    } else {
      spanText = "";
    }
    return spanText;
  };
  gettingData(data[0].fields.footerTittle, "instagram");

  return (
    <FooterBannerContainer>
      <FooterImageWrapper>
        <Image
          src={`https:${data[0].fields.footerBannerImage.fields.file.url}`}
          layout="fill"
          alt={data[0].fields.footerBannerImage.fields.title}
          priority="true"
        />
      </FooterImageWrapper>
      <InfoWrapper>
        <GlobalTitle
          fontSize={[34, 39, 39, 50]}
          lineHeight={["small", "small", "small", "large"]}
          pb={[40]}>
          {filteredTitle} <SpanTitle>{spanText}</SpanTitle>
        </GlobalTitle>
        <InfoText fontSize={[18, 20]} lineHeight={["sub"]}>
          {data[0].fields.description.content[0].content[0].value}
        </InfoText>
        <Subscribe
          as="a"
          href="https://www.instagram.com/prim_uapp/"
          target="_blank"
          rel="noreferrer"
          fontSize={[24]}>
          Subscribe
        </Subscribe>
      </InfoWrapper>
    </FooterBannerContainer>
  );
};

export default FooterBanner;
