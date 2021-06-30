import { Container, Img, Main, Title } from "./hero.styles";

function Hero() {
  return (
    <Main>
      <Img
        src="/images/hero.jpg"
        layout="fill"
        quality="100"
        alt="heroimageofwoman"
        placeholder="blur"
        blurDataURL="/images/hero.jpg"
      />
      <Container>
        <Title>REINVENTING BEAUTY ON DEMAND</Title>
      </Container>
    </Main>
  );
}

export default Hero;
