import { Main, Container, Title, VideoElement, Button } from './video.styles.js'
import { SpanTitle } from '../global-components'

function Video() {
    return (
        <Main>
          <Container>
            <Title>
                <SpanTitle>primlaNcers</SpanTitle> at work
            </Title>
            <VideoElement>
                <iframe src="https://www.youtube.com/embed/SRIv2ziiO2Q?mute=1" allowFullScreen/>
                <p>Prim-u make up</p>
            </VideoElement>
            <Button>book a make up</Button>
          </Container>
        </Main>
    )
}

export default Video