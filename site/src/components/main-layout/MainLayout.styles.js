import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.4;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: #171717;
  }

  main {
    height: 92vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #171717;
    cursor: pointer;

    &:visited { color: #171717; }
    &:active { color: #171717; }
  }
`
