import { Banner, Card, Body, Title, SubTitle, Text, Button } from './banner.styles.js'

function BannerComponent() {
    return (
        <Banner>
            <Card>
                <Body>
                    <Title>For Customers</Title>
                    <SubTitle>Enjoy beauty treatments wherever U are</SubTitle>
                    <Text>Struggling to find the time to pamper yourself? </Text>
                    <Text>With just one click, Prim-U will connect U to the right primlancer, at the right time, right in the comfort of your home. </Text>
                    <Text>On holiday? Book an expert primlancer closest to U. </Text>
                    <Text>Simply click, pick a treatment and we’ll come to U. </Text>
                </Body>
                <Button>Make a Booking</Button>
            </Card>
        </Banner>
    )
}

export default BannerComponent