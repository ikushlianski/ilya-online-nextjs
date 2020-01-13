import React from 'react';
import cx from 'classnames';

import './Button.scss';

export const Button = ({
  inverted,
  primary,
  secondary,
  cta,
  disabled,
  children,
}) => {
  const classes = cx('Button', {
    'Button--inverted': inverted,
    'Button--primary': primary,
    'Button--secondary': secondary,
    'Button--cta': cta,
    'Button--disabled': disabled,
  });

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
