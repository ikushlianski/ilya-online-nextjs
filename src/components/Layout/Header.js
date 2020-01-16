import React from 'react';
import Link from 'next/link';

import { Navbar, NavbarItem } from '../Navbar';

export const Header = () => {
  return (
    <Navbar>
      <NavbarItem>
        <Link href="/">Home</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/works">Portfolio</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/skills">Skills</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/about">About me</Link>
      </NavbarItem>
    </Navbar>
  );
};
