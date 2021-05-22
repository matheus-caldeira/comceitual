import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light';
    colors: {
      header: {
        background: string;
        color: string;
      };
      status: {
        successLabel: string;
        successText: string;
        errorLabel: string;
        errorText: string;
        infoLabel: string;
        infoText: string;
      };
      button: {
        background: string;
        color: string;
      };
      input: {
        background: string;
        color: string;
        border: string;
        colorFocus: string;
      };
      a: {
        color: string;
      };
      primary: string;
      secondary: string;
      background: string;
    };
  }
}
