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

          <div className="CVPage__Website">
            <b>Website:</b>{' '}
            <a href="https://ilya.online">https://ilya.online</a>
          </div>
          <div className="CVPage__Location">
            <b>Location:</b> Warsaw, Poland
          </div>
          <div className="CVPage__Phone">
            <b>Telegram:</b> @ilya_nice
          </div>
          {
            <div className="CVPage__Linkedin">
              <b>LinkedIn:</b>{' '}
              <a
                /* eslint-disable-next-line react/jsx-no-target-blank */
                target={'_blank'}
                href="https://www.linkedin.com/in/ilya-kushlianski/"
                rel="noreferrer"
              >
                linkedin.com/in/ilya-kushlianski
              </a>
            </div>
          }
          {
            <div className="CVPage__Github">
              <b>Github:</b>{' '}
              <a
                href="https://github.com/ikushlianski"
                /* eslint-disable-next-line react/jsx-no-target-blank */
                target={'_blank'}
                rel="noreferrer"
              >
                ikushlianski
              </a>
            </div>
          }

          {extended && (
            <div className="CVPage__Languages">
              <b>Languages:</b> English (fluent), Polish (basic), Belarusian
              (native)
            </div>
          )}
          {extended && (
            <div className="CVPage__Discord">
              <b>Discord:</b> ikushlianski
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
