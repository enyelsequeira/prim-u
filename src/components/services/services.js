<<<<<<< HEAD
import Image from "next/image";

import {
    GlobalSection,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";

import { Container, Card, CardTitle } from './services.styles';



const Services = ({ data }) => {
    return (

        <GlobalSection px={[20, 20, 40, 40, 0]} pt={[20, 60, 80]}>

            <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
                treat yourself with  <SpanTitle>our services </SpanTitle>
            </GlobalTitle>


            <Container>

                {data.map((card) => {
                    return (

                        //Make Up is written different than in the Figma file.
                        <Card key={card.fields.title}>

                            <Image src={`http:${card.fields.image.fields.file.url}`} width="400" height="400" intrinsic/>
                            <CardTitle
                                fontSize={[25, 32, 34, 38]}
                                condensed
                                white
                                lineHeight={["xs", "smaller", "medium"]}>
                                {card.fields.title}
                            </CardTitle>

                        </Card>
                    );
                })}

            </Container>
        </GlobalSection>


    );
=======
import { GlobalSection, GlobalTitle, SpanTitle } from "../global-components";
import { Card, CardTitle, Container, Image } from "./services.styles";

const Services = ({ data }) => {
  return (
    <GlobalSection>
      <GlobalTitle>
        treat yourself with <SpanTitle>our services </SpanTitle>
      </GlobalTitle>

      <Container>
        {data.map((card) => {
          return (
            // Make Up is written different than in the Figma file.
            <Card key={card.fields.title}>
              <Image src={`http:${card.fields.image.fields.file.url}`} />
              <CardTitle
                fontSize={[32, 34, 38]}
                condensed
                white
                lineHeight={["xs", "smaller", "medium"]}>
                {card.fields.title}
              </CardTitle>
            </Card>
          );
        })}
      </Container>
    </GlobalSection>
  );
>>>>>>> main
};

export default Services;
