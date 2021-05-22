import { DefaultTheme } from 'styled-components';
import light from './light';
import dark from './dark';

interface IThemes {
  light: DefaultTheme;
  dark: DefaultTheme;
  [t: string]: DefaultTheme;
}

export default {
  light,
  dark,
} as IThemes;
