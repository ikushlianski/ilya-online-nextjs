import React from 'react';
import cx from 'classnames';

import './Section.scss';

export const Section = ({
  id,
  children,
  className,
  darker,
  amazingBg,
  ...props
}) => {
  const sectionCx = cx('Section', className, {
    'Section--darker': darker,
  });

  return (
    <div id={id} className={sectionCx} {...props}>
      {children}
    </div>
  );
};
