import { SpanTitle } from "../global-components";
import { Title } from "../services/services.styles";
import { Container, EventCard, Main } from "./events.styles";

const Events = ({ data }) => {
  return (
    <Main>
      <Title>
        for <SpanTitle>more </SpanTitle> than just u
      </Title>

      <Container>
        {data.map((card) => {
          return (
            <EventCard
              key={card.fields.servicesImages.fields.title}
              src={`https:${card.fields.servicesImages.fields.file.url}`}
              title={card.fields.bigCardsTitle}
              text={[card.fields.description.content[0].content[0].value]}
              buttonText="Make a Booking"
              href="https://www.prim-u.app/en/list"
              altImageName={card.fields.servicesImages.fields.title}
            />
          );
        })}
      </Container>
    </Main>
  );
};

export default Events;
