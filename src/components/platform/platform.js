import {
  AppleButton,
  Body,
  ButtonContainer,
  Container,
  GoogleButton,
  Img,
  Main,
  Text,
  Title,
} from "./platform.styles";

function Platform() {
  return (
    <Main>
      <Container>
        <Body>
          <Title>we have an app for u</Title>
          <Text>
            Prim-U is South Africa’s first online booking hub that connects world&#8209;class beauty
            entrepreneurs in the industry to customers and hundreds of salons, spas, hotels and
            guests houses countrywide.
          </Text>
          <Text>
            From massages to beauty treatments to male grooming, we’re your one-stop platform for
            every pampering need.
          </Text>
          <Text>
            Our main aim is to give small businesses big opportunities, while bringing every
            customer the ultimate experience and 100% satisfaction. This is our promise.
          </Text>
          <ButtonContainer>
            <AppleButton
              href="https://apps.apple.com/za/app/prim-u/id1377092370"
              target="_blank"
              rel="noreferrer"
              aria-label="app-store"
            />
            <GoogleButton
              href="https://play.google.com/store/apps/details?id=com.yelo.primu"
              target="_blank"
              rel="noreferrer"
              aria-label="google-store"
            />
          </ButtonContainer>
        </Body>
        <Img />
      </Container>
    </Main>
  );
}

export default Platform;
