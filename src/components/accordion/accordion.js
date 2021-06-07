import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  GlobalSection,
  GlobalSubtitle,
  GlobalTitle,
  SpanTitle,
} from "../../styles/global-components/global-wrapper";
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
  const [visible, setIsVisible] = useState(4);

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

  return (
    <GlobalSection>
      {title && (
        <GlobalTitle>
          {title}
          {""} <SpanTitle>{span}</SpanTitle>
        </GlobalTitle>
      )}
      <GlobalSubtitle
        condensed
        size="32px"
        margin="80px 0 60px 0"
        border="1px solid black"
        padding="6px">
        {subtitle}
      </GlobalSubtitle>
      <FaqContainer>
        {data
          .slice(0, visible)
          .map((question, index) => {
            const { fields } = question;
            return (
              <FaqQuestionsWrapper key={fields.faqTitle}>
                <FaqQuestion>
                  <GlobalSubtitle condensed maxW="586px" size="32px" align="left">
                    {fields.faqTitle || fields.partnersQuestions}
                  </GlobalSubtitle>

                  <ButtonWrapper onClick={() => toggle(index)} type="button">
                    {isAnswerShowing === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </ButtonWrapper>
                </FaqQuestion>

                {isAnswerShowing === index ? (
                  <div>
                    <Answer>{fields.answer.content[0].content[0].value}</Answer>
                  </div>
                ) : null}
              </FaqQuestionsWrapper>
            );
          })
          .reverse()}
      </FaqContainer>
      <ShowMore onClick={onLoadMoreClick} type="button">
        click for more
      </ShowMore>
    </GlobalSection>
  );
};

export default Accordion;
