import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  GlobalSection,
  GlobalSubtitle,
  GlobalTitle,
  SpanTitle,
} from "../../styles/global-components";
import {
  Answer,
  ButtonWrapper,
  FaqContainer,
  FaqQuestion,
  FaqQuestionsWrapper,
  ShowMore,
} from "./accordion.styles";

const Accordion = ({ data, subtitle, title, span }) => {
  console.log(data);
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [visible, setIsVisible] = useState(6);

  const toggle = (index) => {
    if (isAnswerShowing === index) {
      // if clicked question is already active, then close it
      return setIsAnswerShowing(null);
    }

    setIsAnswerShowing(index);
  };
  const onLoadMoreClick = () => {
    setIsVisible((v) => v + 1);
  };
  //
  return (
    <GlobalSection px={[20, 20, 40, 40, 61]} pt={[20, 60, 80]}>
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
        {data.slice(0, visible).map((question, index) => {
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

                <ButtonWrapper onClick={() => toggle(index)} type="button">
                  {isAnswerShowing === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </ButtonWrapper>
              </FaqQuestion>

              {isAnswerShowing === index ? (
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
        type="button">
        Show more
      </ShowMore>
    </GlobalSection>
  );
};

export default Accordion;
