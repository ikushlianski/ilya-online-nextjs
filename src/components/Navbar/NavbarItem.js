import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import './NavbarItem.module.scss';

export const NavbarItem = ({ children, href, className, ...props }) => {
  const { pathname } = useRouter();
  const navbarCx = cx('NavbarItem', className, {
    'NavbarItem--active': href === pathname,
  });

  return (
    <li className={navbarCx} {...props}>
      {children}
    </li>
  );
};
