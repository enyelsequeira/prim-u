import styled from "styled-components";

// all components must start with capital letter they are React Components afterall
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.roboto};
  /** 
  in here you can see that things are being added dynamically i am saying if this Container component has a padding prop to add "7rem" otherwise do nothing, this is how you can dynamically change and use this component elsewhere if you needed
  */
  padding: ${(props) => (props.padding ? "7rem" : "")};
`;
