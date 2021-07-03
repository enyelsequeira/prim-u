import heroImg from "../../../public/images/hero.jpg";
import { Container, Img, Main, Title } from "./hero.styles";

function Hero() {
  return (
    <Main>
      <Img
        src={heroImg}
        layout="fill"
        quality="100"
        alt="heroimageofwoman"
        placeholder="blur"
        blurDataURL={heroImg}
        priority="true"
      />
      <Container>
        <Title>REINVENTING BEAUTY ON DEMAND</Title>
      </Container>
    </Main>
  );
}

export default Hero;
