import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
};
