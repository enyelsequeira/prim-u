import Image from "next/image";
import {
    GlobalSection,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";


import { Container, Card, Title, Button, Text, CardContainer, ImageContainer } from './contact.styles';

const Contact = ({ data }) => {
    const bigCards = data.slice(0, 2);
    return (
        <GlobalSection px={[20, 20, 40, 40, 0]} pt={[20, 60, 80]}>
            <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
                For those who provide <SpanTitle> beauty services </SpanTitle>
            </GlobalTitle>

            <Container>
                {
                    bigCards.map((card) => {
                        return (
                            <CardContainer key={card.fields.bigCardsTitle}>
                                <Card>
                                    <ImageContainer>
                                        <Image
                                            src={`http:${card.fields.servicesImages.fields.file.url}`}
                                            layout="fill"
                                            objectFit="cover"
                                            quality={100} />
                                    </ImageContainer>
                                    <Title
                                        fontSize={[32, 34, 38]}
                                        condensed
                                        white
                                        lineHeight={["xs", "smaller", "medium"]}>
                                        {card.fields.bigCardsTitle}
                                    </Title>
                                    <Button fontSize={[24]} lineHeight={["sub"]}>Sign Up</Button>

                                </Card>

                                <Text fontSize={[20]} lineHeight={["sub"]}>{card.fields.description.content[0].content[0].value}</Text>
                            </CardContainer>
                        )
                    })
                }

            </Container>


        </GlobalSection >
    )
}

export default Contact;
