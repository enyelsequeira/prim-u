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
  let filteredTitle = "";
  let spanText = "";
  // console.log(data[0].fields.footerTittle.split(" "));

  const gettingData = (fields, word) => {
    const array = fields.split(" ");
    if (array.includes(word)) {
      spanText = word;
      filteredTitle = array.join(" ").replace(word, "");
    } else {
      spanText = "this didnt";
    }
    return spanText;
  };
  // console.log(gettingData(data[0].fields.footerTittle, "instagram"));
  gettingData(data[0].fields.footerTittle, "instagram");

  return (
    <FooterBannerContainer px={[20, 30, 20, 60]}>
      <FooterImageWrapper>
        <Image
          src={`http:${data[0].fields.footerBannerImage.fields.file.url}`}
          width="500"
          height="500"
          alt="footerBannerImage"
        />
      </FooterImageWrapper>
      <InfoWrapper>
        <GlobalTitle
          fontSize={[34, 40, 40, 50]}
          lineHeight={["small", "medium", "large"]}
          pb={[40, 30]}
          textAlign={["left", "center", "left"]}>
          {filteredTitle} <SpanTitle>{spanText}</SpanTitle>
        </GlobalTitle>
        <InfoText fontSize={[18, 20]} lineHeight={["sub"]}>
          {data[0].fields.description.content[0].content[0].value}
        </InfoText>
        <Subscribe fontSize={[24]}> Subscribe</Subscribe>
      </InfoWrapper>
    </FooterBannerContainer>
  );
};

export default FooterBanner;
