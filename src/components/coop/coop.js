import {
    GlobalSection,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";


import { Container, Card, Image, Title, Button, Text, CardContainer } from './coop.styles';

const Coop = ({ data }) => {
    const bigCards = data.slice(0, 2);
    console.log(bigCards);
    return (
        <GlobalSection px={[20, 20, 40, 40, 61]} pt={[20, 60, 80]}>
            <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
                For those who provide <SpanTitle> beauty services </SpanTitle>
            </GlobalTitle>

            <Container>
                {
                    bigCards.map((card) => {
                        return (
                            <CardContainer>
                                <Card key={card.fields.bigCardsTitle}>
                                    <Image src={`http:${card.fields.servicesImages.fields.file.url}`} />
                                    <Title>{card.fields.bigCardsTitle}</Title>
                                    <Button>Make a Booking</Button>
                                </Card>

                                <Text>{card.fields.description.content[0].content[0].value}</Text>
                            </CardContainer>
                        )
                    })
                }

            </Container>


        </GlobalSection >
    )
}

export default Coop;