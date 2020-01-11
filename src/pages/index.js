import React from 'react';

import { Navbar, NavbarItem } from '../components/Navbar';

import './index.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar>
        <NavbarItem>Skills</NavbarItem>
        <NavbarItem>Portfolio</NavbarItem>
        <NavbarItem>About me</NavbarItem>
      </Navbar>
      Welcome to Next.js!
    </div>
  );
}

export default HomePage;
