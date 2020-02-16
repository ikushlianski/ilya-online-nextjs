import React from 'react';
import cx from 'classnames';

import { Header } from './Header';
import { Footer } from './Footer';

import './Layout.scss';

export const Layout = ({ children, className }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const pageClasses = cx('Page', className);
  const layoutClasses = cx('Layout', {
    'Layout--MenuOpen': menuOpen,
  });

  return (
    <MenuContext.Provider value={{ open: menuOpen, setOpen: setMenuOpen }}>
      <div className={layoutClasses}>
        <Header />
        <div className={pageClasses}>{children}</div>
        <Footer />
      </div>
    </MenuContext.Provider>
  );
};

export const MenuContext = React.createContext({
  open: false,
  setMenuOpen: null,
});
