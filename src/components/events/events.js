import { SpanTitle } from "../global-components";
import { Container, EventCard, Main } from "./events.styles";
/* eslint-disable react/no-array-index-key */
import { Title } from "../services/services.styles";

const Events = ({ data }) => {
  return (
    <>
      <Main>
        <Title>
          for <SpanTitle>more </SpanTitle> than just u
        </Title>

        <Container>
          {data.map((card, i) => (
            <EventCard
              key={i}
              src={`http:${card.fields.servicesImages.fields.file.url}`}
              alt={`event-${card.fields.servicesImages.fields.file.title}`}
              title={card.fields.bigCardsTitle}
              events={card.fields.description}
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
