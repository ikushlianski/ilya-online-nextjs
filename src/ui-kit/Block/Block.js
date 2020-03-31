import React from 'react';
import cx from 'classnames';

import './Block.scss';

export const Block = ({ children, className, ...props }) => {
  const classes = cx('Block', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
