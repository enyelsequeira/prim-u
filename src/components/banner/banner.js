/* eslint-disable react/no-array-index-key */
// import { Main, Img, Body, Button, Card, Text, Title, SubTitle } from "./banner.styles";
import GlobalCard from "../global-components/global-card/globalcard";
import { Main } from "./banner.styles";

function Banner() {
  return (
    <Main>
      <GlobalCard
        src="/images/For-customers.png"
        title="For Customers"
        subtitle="Enjoy beauty treatments wherever U are"
        text={[
          "Struggling to find the time to pamper yourself?",
          "With just one click, Prim-U will connect U to the right primlancer, at the right time, right in the comfort of your home.",
          "On holiday? Book an expert primlancer closest to U.",
          "Simply click, pick a treatment and we’ll come to U.",
        ]}
        href="https://www.prim-u.app/en/list"
        buttonText="Make a Booking"
      />
    </Main>
  );
  // return (
  //   <Main>
  //     <Card>
  //       <Img src='/images/For-customers.png' layout='fill' quality='100' />
  //       <Body>
  //         <Title>{data[0].fields.title}</Title>
  //         {data[0].fields.description.content.map((p, i) => {
  //           return <Text key={i}>{p.content[0].value}</Text>;
  //         })}
  //       </Body>
  //       <Button as="a" href="https://www.prim-u.app/en/list" target="_blank" rel="noreferrer">Make a Booking</Button>
  //     </Card>
  //   </Main>
  // );
}

export default Banner;
