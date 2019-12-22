import React from 'react';

interface DefaultTheme {
  primary: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  white: string;
}

export const defaultTheme: DefaultTheme = {
  primary: '#0D1321',
  primaryLight: '#1D2D44',
  secondary: '#3E5C76',
  secondaryLight: '#748CAB',
  white: '#F0EBD8',
};

// TODO: add theme provider
export const ThemeContext = React.createContext(defaultTheme);
