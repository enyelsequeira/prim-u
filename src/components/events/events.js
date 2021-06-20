import Image from "next/image";
import { Divider, GlobalSection, GlobalTitle, SpanTitle } from "../global-components";
import { Button, Card, Container, ImageWrapper, Text, Title } from "./events.styles";

const Events = ({ data }) => {
  const bigCards = data.reverse();

  return (
    <>
      <Divider mt={[60, 100, 100]} mb={[20, 20, , 20]} />
      <GlobalSection px={[ 1, 20, 20, 40, 40, 0]} pt={[20, 60, 80]}>
        <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "large"]}>
          for <SpanTitle>more </SpanTitle> than just u
        </GlobalTitle>

        <Container>
          {bigCards.map((card) => {
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
                <Title condensed white fontSize={[34, 50]} lineHeight={["large"]}>
                  {card.fields.bigCardsTitle}
                </Title>

                <Text fontSize={[16, 20]} lineHeight={["sub"]}>
                  {card.fields.description.content[0].content[0].value}
                </Text>

                <Button fontSize={[24]} lineHeight={["sub"]}>
                  Make a Booking
                </Button>
              </Card>
            );
          })}
        </Container>
      </GlobalSection>
      <Divider mt={[60, , , 100]} mb={[40, , , 20]} />
    </>
  );
};
export default Events;
