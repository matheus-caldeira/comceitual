import React, { createContext, useCallback, useContext, useState } from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from 'styled-components';
import themes from '../styles/themes';

const key = '@COMCEITUAL:PONTE:theme';
interface IThemeContextData {
  theme: DefaultTheme;
  changeTheme(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    // const storageValue = localStorage.getItem(key);

    // if (storageValue) return themes[storageValue];

    return themes.dark;
  });

  const changeTheme = useCallback(() => {
    const type = theme.title === 'light' ? 'dark' : 'light';
    localStorage.setItem(key, type);
    setTheme(themes[type]);
  }, [theme.title]);

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}

export { useTheme, ThemeProvider };
