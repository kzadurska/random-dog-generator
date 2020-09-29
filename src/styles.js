import { createGlobalStyle } from 'styled-components';

export const queries = {
  mobile: '(max-width: 767px)',
  desktop: '(min-width: 768px)',
};

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 32px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;

    &.no-scroll {
      overflow: hidden;
    }
  }
`;
