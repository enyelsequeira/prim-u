import { BannerCard, Main } from "./banner.styles";

function Banner({ data }) {
  return (
    <Main>
      <BannerCard
        src={`https:${data[0].fields.images[0].fields.file.url}`}
        title={data[0].fields.title}
        altImageName={data[0].fields.images[0].fields.title}
        banner={data[0].fields.description}
        href={data[0].fields.link}
        buttonText="Make a Booking"
      />
    </Main>
  );
}

export default Banner;
