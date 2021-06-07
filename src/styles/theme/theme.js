import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    // This is the fonts we are using
    fontSizes: [
      "40px",
      "20px",
      "30px",
      "18px",
      "16px",
      "50px",
      "38px",
      "24px",
      "22px",
      "32px",
      "34px",
      "14px",
    ],
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
