import React from 'react';
import cx from 'classnames';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children, className }) => {
  const pageClasses = cx('Page', className);

  return (
    <div className="Layout">
      <Header />
      <div className={pageClasses}>{children}</div>
      <Footer />
    </div>
  );
};
