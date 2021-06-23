import { Container, Main, Title, Img } from "./hero.styles";

function Hero() {
  return (
    <Main>
      <Img src="/images/hero.jpg" layout="fill" quality="100" alt="heroimageofwoman" />
      <Container>
        <Title>REINVENTING BEAUTY ON DEMAND</Title>
      </Container>
    </Main>
  );
}

export default Hero;
