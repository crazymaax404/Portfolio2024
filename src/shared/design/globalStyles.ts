import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition: all 0.25s ease-in-out;
}
`;
