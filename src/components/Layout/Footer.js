import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return <div className="Footer">&copy; 2017-{new Date().getFullYear()}</div>;
};
