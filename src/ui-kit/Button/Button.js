import React from 'react';
import cx from 'classnames';

export const Button = ({
  disabled,
  inverted,
  primary,
  secondary,
  children,
}) => {
  const classes = cx('Button', {
    'Button--disabled': disabled,
    'Button--inverted': inverted,
    'Button--primary': primary,
    'Button--secondary': secondary,
  });

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
