import React from 'react';

import { CVContext } from '../../pages/cv';

import './CVHeader.scss';

export const CVHeader = () => {
  const { extended } = React.useContext(CVContext);

  return (
    <div className="MainInfo">
      <div className="MainInfo__Left">
        <img
          src="/ilya.jpeg"
          alt="Ilya Kushlianski"
          className="MainInfo__Photo"
        />
      </div>
      <div className="MainInfo__Right">
        <h1 className="MainInfo__Name">Ilya Kushlianski</h1>
        <h2 className="MainInfo__Title">Full-stack Javascript Developer</h2>
        <div className="MainInfo__Contacts">
          <div className="MainInfo__Email">
            <b>Email:</b>{' '}
            <a href="mailto:kushliansky@gmail.com">kushliansky@gmail.com</a>
          </div>
          <div className="CVPage__Phone">
            <b>Phone:</b> +375 (29) 608 8900
          </div>
          <div className="CVPage__Age">
            <b>Age:</b> {new Date().getFullYear() - 1991}
          </div>
          <div className="CVPage__Location">
            <b>Location:</b> Minsk, Belarus
          </div>
          <div className="CVPage__Website">
            <b>Website:</b>{' '}
            <a href="https://ilya.online">https://ilya.online</a>
          </div>
          {extended && (
            <div className="CVPage__Github">
              <b>Github:</b>{' '}
              <a href="https://github.com/ikushlianski">ikushlianski</a>
            </div>
          )}
          {extended && (
            <div className="CVPage__Skype">
              <b>Skype:</b> <span>kushliansky</span>
            </div>
          )}
          {extended && (
            <div className="CVPage__Linkedin">
              <b>LinkedIn:</b>{' '}
              <a href="https://www.linkedin.com/in/ilya-kushlianski/">
                https://www.linkedin.com/in/ilya-kushlianski
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
