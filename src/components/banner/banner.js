import { Main, BannerCard } from "./banner.styles";

function Banner({ data }) {
  return (
    <Main>
      <BannerCard
        src={`http:${data[0].fields.images[0].fields.file.url}`}
        title={data[0].fields.title}
        alt={data[0].fields.images[0].fields.file.title}
        banner={data[0].fields.description}
        href={data[0].fields.link}
        buttonText="Make a Booking"
      />
    </Main>
  );
}

export default Banner;
