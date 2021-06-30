/* eslint-disable react/no-array-index-key */
import { SpanTitle } from "../global-components";
import { Container, Main, ContactCard } from "./contact.styles";
import { Title } from "../services/services.styles";

const Contact = ({ data }) => {
  return (
    <Main>
      <Title>
        For those who provide <SpanTitle> beauty services </SpanTitle>
      </Title>

      <Container>
        {data.map((card, i) => (
          <ContactCard
            key={i}
            src={`http:${card.fields.image.fields.file.url}`}
            altImageName={card.fields.image.fields.file.title}
            title={card.fields.freelancersSalonsTitle}
            services={card.fields.description}
            buttonText="Sign Up"
            href="https://admin.prim-u.app/"
          />
        ))}
      </Container>
    </Main>
  );
};

export default Contact;
