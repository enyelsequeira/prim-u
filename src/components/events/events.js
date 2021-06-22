import Image from "next/image";
import { zIndex } from "styled-system";
import { Divider, GlobalSection, GlobalTitle, SpanTitle } from "../global-components";
import { Button, Card, Container, ImageWrapper, Text, Title } from "./events.styles";
/* eslint-disable react/no-array-index-key */
import { SpanTitle } from "../global-components";
import { Container, EventCard, Main } from "./events.styles";
import { Title } from '../services/services.styles'

const Events = ({ data }) => {
  return (
    <>
      <Divider mt={[60, 100, 100]} mb={[20, 20, , 20]} />

    <Main>
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
      </Container>
    </Main>
    </>
  );
};

export default Events;
