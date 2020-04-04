import React from 'react';
import cx from 'classnames';

import './Block.scss';

export const Block = ({ children, className, amazingBg, ...props }) => {
  const classes = cx('Block', className, {
    'Block--amazingBg': amazingBg,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
