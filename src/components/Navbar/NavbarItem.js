import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import './NavbarItem.scss';

export const NavbarItem = ({ children, href }) => {
  const { pathname } = useRouter();
  const navbarCx = cx('NavbarItem', {
    'NavbarItem--active': href === pathname,
  });

  return <li className={navbarCx}>{children}</li>;
};
