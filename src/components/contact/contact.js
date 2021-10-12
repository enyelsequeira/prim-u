import { SpanTitle } from "../global-components";
import { Title } from "../services/services.styles";
import { ContactCard, Container, Main } from "./contact.styles";

const Contact = ({ data }) => {
  return (
    <Main>
      <Title>
        For those who provide <SpanTitle> beauty services </SpanTitle>
      </Title>

      <Container>
        {data.map((card) => (
          <ContactCard
            key={card.fields.image.fields.title}
            src={`https:${card.fields.image.fields.file.url}`}
            altImageName={card.fields.image.fields.title}
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
