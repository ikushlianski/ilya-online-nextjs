import React from 'react';

import { Navbar, NavbarItem } from '../Navbar';

export const Header = () => {
  return (
    <Navbar>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Portfolio</NavbarItem>
      <NavbarItem>Skills</NavbarItem>
      <NavbarItem>About me</NavbarItem>
    </Navbar>
  );
};
