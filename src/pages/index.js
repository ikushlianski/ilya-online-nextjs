import React from 'react';

import { Navbar, NavbarItem } from '../components/Navbar';
import { Button } from '../ui-kit/Button';

import '../styles/styles.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar>
        <NavbarItem>Skills</NavbarItem>
        <NavbarItem>Portfolio</NavbarItem>
        <NavbarItem>About me</NavbarItem>
      </Navbar>
      <p>Welcome to Next.js!</p>
      <Button cta>Download CV</Button>
      <Button>About me</Button>
    </div>
  );
}

export default HomePage;
