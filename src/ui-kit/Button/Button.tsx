import React from 'react';
import cx from 'classnames';

import { ThemeContext, Themes } from 'styles';

import './Button.scss';

interface Props {
  children: React.ReactNode;
  inverted?: boolean;
}

export const Button: React.FC<Props> = ({ children, inverted }) => {
  const theme = React.useContext(ThemeContext);

  const classes = cx('Button', {
    'Button--light': theme === Themes.light,
    'Button--inverted': inverted,
  });

  return <button className={classes}>{children}</button>;
};
