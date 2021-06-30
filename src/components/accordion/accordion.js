import { useEffect, useState } from "react";
import { GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  Answer,
  ButtonIcon,
  Column,
  FaqContainer,
  FaqQuestion,
  FaqQuestionsWrapper,
  Main,
  ShowMore,
} from "./accordion.styles";

const Accordion = ({ data, subtitle, title, span }) => {
  const [dataa, setData] = useState([]);
  const [screenWidth, setScreenWidth] = useState();
  const [visible, setIsVisible] = useState(6);

  useEffect(() => {
    setData(data);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  const toggle = (question) => {
    setData(
      dataa.map((d) =>
        d.sys.id === question.sys.id
          ? { ...d, fields: { ...d.fields, visible: !d.fields.visible } }
          : d,
      ),
    );
  };

  function questionComponent(fields, index, question) {
    return (
      <FaqQuestionsWrapper key={index}>
        <FaqQuestion>
          <GlobalSubtitle
            lineHeight={["sub", "smaller"]}
            condensed
            fontSize={[24, 28, 32]}
            align="left">
            {fields.faqTitle || fields.partnersQuestions}
          </GlobalSubtitle>
          <ButtonIcon
            onClick={() => toggle(question)}
            visible={fields.visible}
            type="button"
            aria-label="showmore-showless"
          />
        </FaqQuestion>
        <Answer visible={fields.visible} fontSize={[18]} lineHeight={["sub"]}>
          {fields.answer.content[0].content[0].value}
        </Answer>
      </FaqQuestionsWrapper>
    );
  }

  const onLoadMoreClick = () => {
    setIsVisible((v) => v + 4);
  };
  return (
    <Main type={data[0].fields.faqTitle} id="faq">
      {title && (
        <GlobalTitle
          mb={[40, 40, 80]}
          fontSize={[34, 40, 50]}
          lineHeight={["small", "medium", "large"]}>
          {title}
          {""} <SpanTitle>{span}</SpanTitle>
        </GlobalTitle>
      )}
      <GlobalSubtitle
        condensed
        fontSize={[24, 30, 32]}
        mb={[29, 32, 54, 60]}
        border="2px solid black"
        pb={["2px", "6px"]}>
        {subtitle}
      </GlobalSubtitle>
      <FaqContainer>
        {screenWidth > 900 ? (
          <>
            <Column>
              {dataa.slice(0, visible).map((question, index) => {
                const { fields } = question;
                return index % 2 === 0 ? questionComponent(fields, index, question) : null;
              })}
            </Column>
            <Column>
              {dataa.slice(0, visible).map((question, index) => {
                const { fields } = question;
                return index % 2 !== 0 ? questionComponent(fields, index, question) : null;
              })}
            </Column>
          </>
        ) : (
          <Column>
            {dataa.slice(0, visible).map((question, index) => {
              const { fields } = question;
              return questionComponent(fields, index, question);
            })}
          </Column>
        )}
      </FaqContainer>
      <ShowMore
        fontSize={[24, 29, 32]}
        lineHeight={["sub"]}
        mx="auto"
        onClick={onLoadMoreClick}
        type="button"
        disabled={visible >= dataa.length}>
        Show more
      </ShowMore>
    </Main>
  );
};

export default Accordion;
