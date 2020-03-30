import React from 'react';
import Link from 'next/link';

import { Navbar, NavbarItem } from '../Navbar';

export const Header = () => {
  return (
    <Navbar>
      <NavbarItem href="/">
        <Link href="/">
          <a href="/">Home</a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/works">
        <Link href="/works">
          <a href="/works">Portfolio</a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/skills">
        <Link href="/skills">
          <a href="/skills">Skills</a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/about">
        <Link href="/about">
          <a href="/about">About me</a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/cv">
        <Link href="/cv">
          <a href="/cv">CV</a>
        </Link>
      </NavbarItem>
    </Navbar>
  );
};
