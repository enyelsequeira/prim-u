import {
    GlobalSection,
    GlobalSubtitle,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";
import { Container, Card, Image, Title, Text, Button } from "../events/events.styles";


const Events = ({ data }) => {

    const bigCards = data.slice(2, 5).reverse();

    return (
        <GlobalSection px={[20, 20, 40, 40, 61]} pt={[20, 60, 80]}>
            <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
                for <SpanTitle>more </SpanTitle> than just u
            </GlobalTitle>

            <Container>

                {
                    bigCards.map((card) => {
                        return (
                            <Card key={card.fields.bigCardsTitle}>
                                <Image src={`http:${card.fields.servicesImages.fields.file.url}`}/>
                                <Title>{card.fields.bigCardsTitle}</Title>
                                <Text>{card.fields.description.content[0].content[0].value}</Text>
                                <Button>Make a Booking</Button>
                            </Card>
                        )
                    })
                }
            </Container>

            
        </GlobalSection >
    )
}
export default Events;