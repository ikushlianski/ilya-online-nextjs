import React from 'react';
import Link from 'next/link';

import { Navbar, NavbarItem } from '../Navbar';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

export const Header = () => {
  return (
    <Navbar>
      <NavbarItem href={getLinkByAlias('/')}>
        <Link href={getLinkByAlias('/')}>
          <a className="NavbarItem__Link" href={getLinkByAlias('/')}>
            Home
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href={getLinkByAlias('about')}>
        <Link href={getLinkByAlias('about')}>
          <a className="NavbarItem__Link" href={getLinkByAlias('about')}>
            Personality
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href={getLinkByAlias('works')}>
        <Link href={getLinkByAlias('works')}>
          <a className="NavbarItem__Link" href={getLinkByAlias('works')}>
            Code examples
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href={getLinkByAlias('skills')}>
        <Link href={getLinkByAlias('skills')}>
          <a className="NavbarItem__Link" href={getLinkByAlias('skills')}>
            Skills
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem href={getLinkByAlias('experience')}>
        <Link href={getLinkByAlias('experience')}>
          <a className="NavbarItem__Link" href={getLinkByAlias('experience')}>
            Experience
          </a>
        </Link>
      </NavbarItem>
      <NavbarItem className="shown-md" href={getLinkByAlias('cv')}>
        <Link href={getLinkByAlias('cv')}>
          <a className="NavbarItem__Link" href={getLinkByAlias('cv')}>
            CV {'\u{1F4CE}'}
          </a>
        </Link>
      </NavbarItem>
    </Navbar>
  );
};
