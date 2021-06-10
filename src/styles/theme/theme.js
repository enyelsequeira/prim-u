import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    // This is the fonts we are using
    breakpoints: ["640px", "768px", "1024px", "1280px"],
    space: [
      "11px",
      "20px",
      "29px",
      "30px",
      "40px",
      "54px",
      "60px",
      "80px",
      "105px",
      "256px",
      "295px",
      "364px",
      "630px",
      512,
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
      large: "59px",
      sub: "28px",
      title: 1.25,
      copy: 1.5,
    },
    fonts: {
      roboto: "Roboto, sans-serif",
      condensed: "Roboto Condensed, sans-serif",
    },
    colors: {
      // The colors we are using are already here
      white: "#FFFFFF",
      black: "#000000;",
      purple: "#683D83",
      gray: "#F2F2F2",
      background: "#000;",
      // background: "#E5E5E5;",
    },
    // breakpoints: {
    //   // all the breakpoints we need, we can change theme if we need
    //   sm: "media  screen and (min-width: 640px)",
    //   md: "media  screen and (min-width: 768px)",
    //   lg: "@media screen and (min-width: 1024px)",
    //   xl: "@media  screen and (min-width: 1280px)",
    //   xxl: "@media  screen and (min-width: 1440px)",
    // },
  };
}

// check how we use these styles in the global.styles folder

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
