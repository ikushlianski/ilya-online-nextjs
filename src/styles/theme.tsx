import React from 'react';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

export const ThemeContext = React.createContext(Themes.dark);
