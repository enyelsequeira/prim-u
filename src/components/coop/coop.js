import {
    GlobalSection,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";

import { Container } from './coop.styles';

const Coop = ({data}) => {
    const bigCards = data.slice(0, 2).reverse();
    console.log(bigCards);
    return (
        <GlobalSection>
            <GlobalTitle>
            For those who provide <SpanTitle> beauty services </SpanTitle> than just u
            </GlobalTitle>

            <Container>

                
            </Container>

            
        </GlobalSection >
    )
}

export default Coop;