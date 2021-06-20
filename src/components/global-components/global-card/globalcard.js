/* eslint-disable react/no-array-index-key */
import { Body, Button, Card, Img, SubTitle, Text, Title } from "./globalcard.styles";

function GlobalCard({ title, subtitle, text, href, buttonText, src, className }) {
  return (
    <Card className={className}>
      <Img src={src} layout="fill" quality="100" />
      <Body>
        <Title>{title}</Title>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {text && text.map((p, i) => <Text key={i}>{p} </Text>)}
      </Body>
      <Button as="a" href={href} target="_blank" rel="noreferrer">
        {buttonText}
      </Button>
    </Card>
  );
}

export default GlobalCard;
