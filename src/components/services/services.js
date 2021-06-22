/* eslint-disable react/no-array-index-key */
import { SpanTitle } from "../global-components";
import { Container, ServiceCard, Main, Title } from "./services.styles";

const Services = ({ data }) => {
  return (
    <Main>
      <Title>
        treat yourself with <SpanTitle>our services </SpanTitle>
      </Title>

      <Container>
        {data.reverse().map((card, i) => (
          <ServiceCard
            key={i}
            src={`http:${card.fields.image.fields.file.url}`}
            title={card.fields.title}
          />
        ))}
      </Container>
    </Main>
  );
};

export default Services;
