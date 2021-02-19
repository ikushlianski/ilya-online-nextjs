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
      <NavbarItem href="/works/index.html">
        <Link href="/works/index.html">
          <a className="NavbarItem__Link" href="/works/index.html">
            Code examples
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/skills/index.html">
        <Link href="/skills/index.html">
          <a className="NavbarItem__Link" href="/skills/index.html">
            Skills
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href="/about/index.html">
        <Link href="/about/index.html">
          <a className="NavbarItem__Link" href="/about/index.html">
            About me
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem className="shown-md" href="/cv/index.html">
        <Link href="/cv/index.html">
          <a className="NavbarItem__Link" href="/cv/index.html">
            CV {'\u{1F4CE}'}
          </a>
        </Link>
      </NavbarItem>
    </Navbar>
  );
};
