import React from 'react';
import cx from 'classnames';
import Head from 'next/head';

import { Header } from './Header';
import { Footer } from './Footer';

import './Layout.scss';

export const Layout = ({
  children,
  className,
  title = 'Ilya Kushlianski, Javascript Developer',
  description = 'Full-stack Javascript developer from Minsk. My top skills are Javascript, React,Typescript and Node.js',
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const pageClasses = cx('Page', className);
  const layoutClasses = cx('Layout', {
    'Layout--MenuOpen': menuOpen,
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MenuContext.Provider value={{ open: menuOpen, setOpen: setMenuOpen }}>
        <div className={layoutClasses}>
          <Header />
          <div className={pageClasses}>{children}</div>
          <Footer />
        </div>
      </MenuContext.Provider>
    </>
  );
};

export const MenuContext = React.createContext({
  open: false,
  setMenuOpen: null,
});
