import React from 'react';
import cx from 'classnames';

import { HamburgerIcon } from './Hamburger';

import './Navbar.scss';

export const Navbar = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const classes = cx('Navbar', {
    'Navbar--open': open,
  });

  return (
    <div className={classes}>
      <HamburgerIcon onClick={() => setOpen(!open)} open={open} />
      <ul className="Navbar__ItemsContainer">{open && children}</ul>
    </div>
  );
};
