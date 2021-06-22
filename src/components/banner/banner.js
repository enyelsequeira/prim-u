/* eslint-disable react/no-array-index-key */
import { Main, BannerCard } from "./banner.styles";

function Banner() {
  return (
    <Main>
      <BannerCard
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
}

export default Banner;
