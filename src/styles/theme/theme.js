import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    breakpoints: ["640px", "768px", "1024px", "1280px"],
    space: [
      "0",
      "10px",
      "20px",
      "16px",
      "18px",
      "29px",
      "30px",
      "40px",
      "50px",
      "54px",
      "60px",
      "80px",
      "105px",
      "256px",
      "268px",
      "335px",
      "295px",
      "630px",
      "434px",
      "24px",
    ],
    fontSizes: [
      "14px",
      "16px",
      "18px",
      "20px",
      "22px",
      "24px",
      "29px",
      "30px",
      "32px",
      "34px",
      "38px",
      "40px",
      "50px",
    ],
    lineHeights: {
      smaller: "37px",
      xs: "35px",
      small: "40px",
      medium: "45px",
      mediumTwo: "48px",
      large: "59px",
      sub: "28px",
      subx: "20px",
      title: 1.25,
      copy: 1.5,
    },
    fonts: {
      roboto: "Roboto, sans-serif",
      condensed: "Roboto Condensed, sans-serif",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000;",
      purple: "#683D83",
      gray: "#F2F2F2",
      background: "#000;",
      // background: "#E5E5E5;",
    },
  };
}

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
