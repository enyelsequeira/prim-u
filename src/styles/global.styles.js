import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    list-style: none;
    outline: none;
    font-size: 1.6rem;
    margin: 0;
    padding:0
  }
  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    font-size: 62.5%;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }


  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    overflow-x: hidden;
    overflow-y: auto;
    -moz-transition: all 350ms ease-in-out;
    -o-transition: all 350ms ease-in-out;
    -webkit-transition: all 350ms ease-in-out;
    transition: all 350ms ease-in-out;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyles;
// quick test
