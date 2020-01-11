import React from 'react';

import {HamburgerIcon} from "./Hamburger";

import './Navbar.scss';

export const Navbar = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="Navbar">
      <HamburgerIcon onClick={() => setOpen(!open)} />
      {open && children}
    </div>
  );
};
