import React from 'react';

import { CVContext } from '../../pages/cv';

import './CVHeader.scss';
import { getOverallExperienceInYears } from '../../services/experience.service';

export const CVHeader = () => {
  const { extended } = React.useContext(CVContext);
  const overallExperience = getOverallExperienceInYears();

  return (
    <div className="MainInfo">
      <div className="MainInfo__Right">
        <h1 className="MainInfo__Name">Ilya Kushlianski</h1>
        <h2 className="MainInfo__Title">
          Senior{' '}
          {process.env.MODE === 'fs' ? 'full-stack Javascript ' : 'front-end'}
          developer, {Math.floor(overallExperience)} years of experience
        </h2>
        <div className="MainInfo__Contacts">
          <div className="CVPage__Location">
            <b>Location:</b> Warsaw, Poland (GMT+1)
          </div>
          <div className="MainInfo__Email">
            <b>Email:</b>{' '}
            <a href="mailto:kushliansky@gmail.com">kushliansky@gmail.com</a>
          </div>
          <div className="CVPage__CooperationFormat">
            <b>Type of contract:</b> B2B
          </div>
          <div className="CVPage__Website">
            <b>Website:</b>{' '}
            <a href="https://ilya.online">https://ilya.online</a>
          </div>
          <div className="CVPage__IsRemote">
            <b>Work mode:</b> Remote
          </div>
          <div className="CVPage__Phone">
            <b>WhatsApp:</b> +48 573 055 500
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
