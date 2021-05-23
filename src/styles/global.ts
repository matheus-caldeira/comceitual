import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h3, button, a, input, select {
    font-family: 'Comfortaa', cursive;
  }

  h1 {
    /* font-size: 37pt; */
    font-weight: 700;
    color: ${props => props.theme.colors.a.color}
  }

  h2 {
    /* font-size: 27pt; */
    font-weight: 300;
  }

  h3, button, a, input, select {
    /* font-size: 19pt; */
    font-weight: 500;
  }

  h4 {
    /* font-size: 19pt; */
    font-weight: 300;
  }

  h5, p, span {
    /* font-size: 16pt; */
    font-weight: 300;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }
`;
