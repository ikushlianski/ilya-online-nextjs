import React from 'react';
import cx from 'classnames';

import './Card.scss';

export const Card = ({ children, flat }) => {
  const cls = cx('Card', {
    'Card--flat': flat,
  });

  return <div className={cls}>{children}</div>;
};
