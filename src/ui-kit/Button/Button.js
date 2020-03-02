import React from 'react';
import cx from 'classnames';

// would be nice if UI kit knew nothing about framework
// but this is a small project, so let it be :)
import Link from 'next/link';

import './Button.scss';

export const Button = ({
  inverted,
  primary,
  secondary,
  cta,
  disabled,
  children,
  href,
}) => {
  const classes = cx('Button', {
    'Button--inverted': inverted,
    'Button--primary': primary,
    'Button--secondary': secondary,
    'Button--cta': cta,
    'Button--disabled': disabled,
  });

  return (
    <Link href={href}>
      <a href={href}>
        <button disabled={disabled} className={classes}>
          {children}
        </button>
      </a>
    </Link>
  );
};
