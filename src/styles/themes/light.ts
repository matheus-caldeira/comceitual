import { DefaultTheme } from 'styled-components';

export default {
  title: 'light',

  colors: {
    header: {
      background: '#FFF',
      color: '#374b4a',
    },
    status: {
      successLabel: '#238636',
      successText: '#fff',
      errorLabel: '#c53030',
      errorText: '#fff',
      infoLabel: '#1f6feb',
      infoText: '#f0f6fc',
    },
    button: {
      background: '#ffa737',
      color: '#000',
    },
    input: {
      background: '#f7f7f7',
      color: '#666360',
      border: '#232129',
      colorFocus: '#ffa737',
    },
    a: {
      color: '#ffa737',
    },
    border: '#374b4a',
    primary: '#000 ',
    secondary: '#996421',
    background: {
      primary: '#f7f7f7',
      secondary: '#FFF',
    },
  },
} as DefaultTheme;
