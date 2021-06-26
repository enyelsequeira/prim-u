import { SpanTitle } from "../global-components";
import { Button, Container, Main, Title, VideoElement } from "./video.styles";

function Video() {
  return (
    <Main>
      <Container>
        <Title>
          <SpanTitle>primlaNcers</SpanTitle> at work
        </Title>
        <VideoElement>
          <iframe
            src="https://www.youtube.com/embed/SRIv2ziiO2Q?mute=1"
            allowFullScreen
            title="My YouTube Video with Prim-U"
          />
          <p>Prim-u make up</p>
        </VideoElement>
        <Button as="a" href="https://www.prim-u.app/en/list" target="_blank" rel="noreferrer">
          book a make up
        </Button>
      </Container>
    </Main>
  );
}

export default Video;
