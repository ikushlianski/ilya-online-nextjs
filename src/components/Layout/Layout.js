import React from 'react';
import cx from 'classnames';
import Head from 'next/head';

import { Header } from './Header';
import { Footer } from './Footer';

import './Layout.module.scss';
import { LinkedInCta } from '../common/LinkedInCta';

export const Layout = ({
  children,
  className,
  title = 'Ilya Kushlianski, Javascript Developer',
  description = 'Full-stack Javascript developer from Minsk. My top skills are Javascript, React,Typescript and Node.js',
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [ctaOpen, setCtaOpen] = React.useState(false);

  const pageClasses = cx('Page', className);
  const layoutClasses = cx('Layout', {
    'Layout--MenuOpen': menuOpen,
  });

  React.useEffect(() => {
    const viewCount = Number(localStorage.getItem('viewCount'));

    if (!viewCount) {
      localStorage.setItem('viewCount', 1);
    } else {
      localStorage.setItem('viewCount', viewCount + 1);
    }

    // if (viewCount % 10 === 0) {
    //   setCtaOpen(true);
    // }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {ctaOpen && (
          <script
            type="text/javascript"
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
          />
        )}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-109173848-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-109173848-1');`,
          }}
        />
      </Head>
      <MenuContext.Provider value={{ open: menuOpen, setOpen: setMenuOpen }}>
        <div className={layoutClasses}>
          <Header />
          <div className={pageClasses}>{children}</div>
          <Footer />
        </div>
        <LinkedInCta open={ctaOpen} setOpen={setCtaOpen} />
      </MenuContext.Provider>
    </>
  );
};

export const MenuContext = React.createContext({
  open: false,
  setMenuOpen: null,
});
