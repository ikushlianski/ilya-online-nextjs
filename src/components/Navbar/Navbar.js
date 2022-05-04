import React from 'react';
import cx from 'classnames';

import { MenuContext } from '../Layout';

import './Navbar.scss';

export const Navbar = ({ children }) => {
  const { open, setOpen } = React.useContext(MenuContext);

  const navbarClasses = cx('Navbar', {
    'Navbar--open': open,
  });

  const openMenuButtonClasses = cx('Navbar__OpenMenuButton', {
    'Navbar__OpenMenuButton--open': open,
  });

  const itemsContainerCx = cx('Navbar__ItemsContainer', {
    'Navbar__ItemsContainer--open': open,
  });

  return (
    <div className={navbarClasses}>
      <div className="Navbar__UkraineFlag">
        {/*  <img*/}
        {/*    className="Navbar__UkraineFlagImg"*/}
        {/*    src="/ukraine-flag.svg"*/}
        {/*    alt="ukraine flag"*/}
        {/*  />*/}
        {/*  <span className="Navbar__UkraineFlagText">Peace!</span>*/}
      </div>

      <div className={openMenuButtonClasses} onClick={() => setOpen(!open)}>
        {Bars}
      </div>

      <ul className={itemsContainerCx}>
        <div className="Navbar__CloseMenuButton" onClick={() => setOpen(!open)}>
          {Times}
        </div>
        {children}
      </ul>
    </div>
  );
};

export const Bars = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="bars"
    className="svg-inline--fa fa-bars fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    />
  </svg>
);

export const Times = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="times"
    className="svg-inline--fa fa-times fa-w-11"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 512"
  >
    <path
      fill="currentColor"
      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    />
  </svg>
);
