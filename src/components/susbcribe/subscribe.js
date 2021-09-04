import { GlobalTitle } from "../global-components";
import { SubscribeBtn, SubscribeContainer } from "./subscribe.styles";

const SubscribeSection = () => {
  return (
    <SubscribeContainer>
      <GlobalTitle fontSize={[34, 39, 39, 50]} lineHeight={["small", "small", "small", "large"]}>
        subscribe to our newsletter
      </GlobalTitle>
      <SubscribeBtn
        as="a"
        href="https://www.instagram.com/prim_uapp/"
        target="_blank"
        rel="noreferrer"
        fontSize={[24]}>
        Subscribe
      </SubscribeBtn>
    </SubscribeContainer>
  );
};

export default SubscribeSection;
