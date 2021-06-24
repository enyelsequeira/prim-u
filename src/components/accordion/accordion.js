import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  Answer,
  ButtonWrapper,
  FaqContainer,
  FaqQuestion,
  FaqQuestionsWrapper,
  ShowMore,
} from "./accordion.styles";

const Accordion = ({ data, subtitle, title, span }) => {
  
  // const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [dataa, setData] = useState([]);
  const [visible, setIsVisible] = useState(6);
  
  useEffect(() => setData(data), [])
  
  const toggle = (question) => {
    setData(dataa.map(d => d.sys.id === question.sys.id ? {...d, fields: { ...d['fields'], visible: d['fields']['visible'] ? false : true}} : d))
  };

  // const toggle = (index) => {
  //   if (isAnswerShowing === index) {
  //     // if clicked question is already active, then close it
  //     return setIsAnswerShowing(null);
  //   }

  //   setIsAnswerShowing(index);
  // };
  const onLoadMoreClick = () => {
    setIsVisible((v) => v + 4);
  };
  return (
    <>
      <GlobalSection px={[20, 20, 40, 40, 61]} pt={[20, 60, 80]} id="faq">
        {title && (
          <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
            {title}
            {""} <SpanTitle>{span}</SpanTitle>
          </GlobalTitle>
        )}
        <GlobalSubtitle
          condensed
          fontSize={[24, 30, 32]}
          mt={[40, 32, 80]}
          mb={[29, 32, 54, 60]}
          border="1px solid black"
          padding="6px">
          {subtitle}
        </GlobalSubtitle>
        <FaqContainer>
          {dataa.slice(0, visible).map((question, index) => {
            const { fields } = question;
            return (
              <FaqQuestionsWrapper key={index}>
                <FaqQuestion>
                  <GlobalSubtitle
                    lineHeight={["sub", "smaller"]}
                    condensed
                    maxW="586px"
                    width={[295, 256, 364, 364]}
                    fontSize={[24, 28, 32]}
                    align="left">
                    {fields.faqTitle || fields.partnersQuestions}
                  </GlobalSubtitle>

                  {/* <ButtonWrapper onClick={() => toggle(index)} type="button">
                    {isAnswerShowing === index ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
                  <ButtonWrapper onClick={() => toggle(question)} type="button">
                    {fields['visible'] ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </ButtonWrapper>
                </FaqQuestion>

                {/* {isAnswerShowing === index ? ( */}
                {fields['visible'] ? (
                  <div>
                    <Answer fontSize={[18]} lineHeight={["sub"]} pt={[20, 22, 30]} pb={[40, 60]}>
                      {fields.answer.content[0].content[0].value}
                    </Answer>
                  </div>
                ) : null}
              </FaqQuestionsWrapper>
            );
          })}
        </FaqContainer>
        <ShowMore
          fontSize={[24, 29, 32]}
          lineHeight={["sub"]}
          mx={"auto"}
          onClick={onLoadMoreClick}
          type="button"
          disabled={visible >= dataa.length}>
          Show more
        </ShowMore>
      </GlobalSection>
    </>
  );
};

export default Accordion;
