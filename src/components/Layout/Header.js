import React from 'react';
import Link from 'next/link';

import { Navbar, NavbarItem } from '../Navbar';

export const Header = () => {
  return (
    <Navbar>
      <NavbarItem href="/">
        <Link href="/">
          <a className="NavbarItem__Link" href="/">
            Home
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/works">
        <Link href="/works">
          <a className="NavbarItem__Link" href="/works">
            Portfolio
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/skills">
        <Link href="/skills">
          <a className="NavbarItem__Link" href="/skills">
            Skills
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/about">
        <Link href="/about">
          <a className="NavbarItem__Link" href="/about">
            About me
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem className="shown-md" href="/cv">
        <Link href="/cv">
          <a className="NavbarItem__Link" href="/cv">
            CV {'\u{1F4CE}'}
          </a>
        </Link>
      </NavbarItem>
    </Navbar>
  );
};
