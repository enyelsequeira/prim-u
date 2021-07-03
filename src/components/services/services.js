import { SpanTitle } from "../global-components";
import { Container, Main, ServiceCard, Title } from "./services.styles";

const Services = ({ data }) => {
  return (
    <Main>
      <Title>
        treat yourself with <SpanTitle>our services </SpanTitle>
      </Title>

      <Container>
        {data.reverse().map((card) => {
          return (
            <a href={card.fields.link} key={card.fields.title} target="_blank" rel="noreferrer">
              <ServiceCard
                key={card.fields.title}
                src={`https:${card.fields.image.fields.file.url}`}
                altImageName={card.fields.image.fields.title}
                title={card.fields.title}
              />
            </a>
          );
        })}
      </Container>
    </Main>
  );
};

export default Services;
