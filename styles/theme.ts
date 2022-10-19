import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme: DefaultTheme = {
  colors: {
    blue: '#0086A3',
    white: '#FFFFFF',
    black: '#000000',
    green: '#1A953A',
    indigo: '#6366f1',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'indigo',
    },
  },
  forms: {
    input: {
      color: 'black',
    },
    textarea: {},
    label: {},
    radio: {},
    checkbox: {},
  },
};
