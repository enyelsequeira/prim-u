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
        <GlobalSection>
            <GlobalTitle>
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
                        

                        // <Card key={card.fields.title}>
                            
                        //     <Title />
                        //     <Text />
                        //     <Button />
                        // </Card>
                    })
                }
            </Container>

            
        </GlobalSection >
    )
}
export default Events;