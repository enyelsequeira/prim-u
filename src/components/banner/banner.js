import { Banner, Body, Button, Card, Text, Title } from "./banner.styles";

function BannerComponent({ data }) {
  return (
    <Banner>
      <Card
        mobile={`http:${data[0].fields.images[1].fields.file.url}`}
        desktop={`http:${data[0].fields.images[0].fields.file.url}`}>
        <Body>
          <Title>{data[0].fields.title}</Title>
          {data[0].fields.description.content.map((p) => {
            return <Text>{p.content[0].value}</Text>;
          })}
        </Body>
        <Button>Make a Booking</Button>
      </Card>
    </Banner>
  );
}

export default BannerComponent;
