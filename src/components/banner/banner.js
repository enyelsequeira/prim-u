/* eslint-disable react/no-array-index-key */
import { Main, Img, Body, Button, Card, Text, Title } from "./banner.styles";

function Banner({ data }) {
  return (
    <Main>
      <Card>
        <Img src='/images/For-customers.png' layout='fill' quality='100' />
        <Body>
          <Title>{data[0].fields.title}</Title>
          {data[0].fields.description.content.map((p, i) => {
            return <Text key={i}>{p.content[0].value}</Text>;
          })}
        </Body>
        <Button>Make a Booking</Button>
      </Card>
    </Main>
  );
}

export default Banner;
