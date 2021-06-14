import { Main, Container, Body, Title, Text, ButtonContainer, AppleButton, GoogleButton, Img } from './platform.styles.js'

function Platform() {
    return (
        <Main>
            <Container>
                <Body>
                    <Title>we have an app for u</Title>
                    <Text>Prim-U is South Africa’s first online booking hub that connects world&#8209;class beauty entrepreneurs in the industry to customers and hundreds of salons, spas, hotels and guests houses countrywide.</Text>
                    <Text>From massages to beauty treatments to male grooming, we’re your one-stop platform for every pampering need.</Text>
                    <Text>Our main aim is to give small businesses big opportunities, while bringing every customer the ultimate experience and 100% satisfaction. This is our promise.</Text>
                    <ButtonContainer>
                        <AppleButton href='#' />
                        <GoogleButton href='#' />
                    </ButtonContainer>
                </Body>
                <Img />
            </Container>
        </Main>
    )
}

export default Platform