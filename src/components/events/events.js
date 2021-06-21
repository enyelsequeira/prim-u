/* eslint-disable react/no-array-index-key */
// import Image from "next/image";
import { Divider, GlobalTitle, SpanTitle } from "../global-components";
import { Container, EventCard, Main } from "./events.styles";
import { Title } from '../services/services.styles'

const Events = ({ data }) => {
  // const bigCards = data.reverse();

  return (
    <Main>
      {/* <Divider mt={[60, 0, 0, 100]} mb={[20, 20, , 20]} /> */}
      {/* <GlobalSection px={[20, 20, 40, 40, 0]} pt={[20, 60, 80]}> */}
      <Title>
        for <SpanTitle>more </SpanTitle> than just u
      </Title>

      <Container>
        {data.map((card, i) => (
          <EventCard
            key={i}
            src={`http:${card.fields.servicesImages.fields.file.url}`}
            title={card.fields.bigCardsTitle}
            text={[card.fields.description.content[0].content[0].value]}
            buttonText="Make a Booking"
            href="https://www.prim-u.app/en/list"
          />
        ))}
        {/* {bigCards.map((card) => {
            return (
              <Card key={card.fields.bigCardsTitle}>
                <ImageWrapper>
                  <Image
                    src={`http:${card.fields.servicesImages.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </ImageWrapper>
                <Title condensed white fontSize={[25, 34, 50]} lineHeight={["large"]}>
                  {card.fields.bigCardsTitle}
                </Title>
                <Text fontSize={[20]} lineHeight={["sub"]}>
                  {card.fields.description.content[0].content[0].value}
                </Text>
                <Button fontSize={[24]} lineHeight={["sub"]}>
                  Make a Booking
                </Button>
              </Card>
            );
          })} */}
      </Container>
      {/* </GlobalSection> */}
      {/* <Divider mt={[60, , , 100]} mb={[40, , , 20]} /> */}
    </Main>
  );
};
export default Events;
