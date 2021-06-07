import {
  GlobalSection,
  GlobalSubtitle,
  GlobalTitle,
  SpanTitle,
} from "../../styles/global-components/global-wrapper";

const Accordion = ({ data }) => {
  return (
    <GlobalSection>
      <GlobalTitle>
        Frequently Asked <SpanTitle>questions </SpanTitle>
      </GlobalTitle>
      <GlobalSubtitle condensed> test </GlobalSubtitle>
    </GlobalSection>
  );
};

export default Accordion;
