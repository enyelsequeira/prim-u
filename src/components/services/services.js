import Image from "next/image";
import { GlobalSection, GlobalTitle, SpanTitle } from "../global-components";
import { Card, CardTitle, Container, ServiceCard, Main, Title } from "./services.styles";

const Services = ({ data }) => {
  return (
    // <GlobalSection px={[20, 20, 40, 40, 0]} pt={[20, 60, 80]}>
    <Main>
      <Title >
        treat yourself with <SpanTitle>our services </SpanTitle>
      </Title>
      {/* <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
        treat yourself with <SpanTitle>our services </SpanTitle>
      </GlobalTitle> */}

      <Container>
        {data.reverse().map((card) => {
          return (
            <ServiceCard 
                src={`http:${card.fields.image.fields.file.url}`}
                title={card.fields.title} />
            // Make Up is written different than in the Figma file.
            // <Card key={card.fields.title}>
            //   <Image
            //     src={`http:${card.fields.image.fields.file.url}`}
            //     width="400"
            //     height="400"
            //     intrinsic="true"
            //   />
            //   <CardTitle
            //     fontSize={[25, 32, 34, 38]}
            //     condensed
            //     white
            //     lineHeight={["xs", "smaller", "medium"]}>
            //     {card.fields.title}
            //   </CardTitle>
            // </Card>
          );
        })}
      </Container>
    </Main>
    // </GlobalSection>
  );
};

export default Services;
