import {
    GlobalSection,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";

import { Container, Card, CardTitle,Image } from './services.styles';



const Services = ({data}) => {
    return (

        <GlobalSection px={[20, 20, 40, 40, 61]} pt={[20, 60, 80]}>
            
            <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
                treat yourself with  <SpanTitle>our services </SpanTitle>
            </GlobalTitle>


            <Container>
                
                {data.map((card) => {
                    return (

                        //Make Up is written different than in the Figma file.
                        <Card key={card.fields.title}>
                            
                            <Image src={`http:${card.fields.image.fields.file.url}`} />
                            <CardTitle>{card.fields.title}</CardTitle>

                        </Card>                
                    );
                })}

            </Container>
        </GlobalSection>


    );
};

export default Services;