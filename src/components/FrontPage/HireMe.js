import React from 'react';

import { Button } from '../../ui-kit';

import './HireMe.scss';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

export const HireMe = ({ lookingForJob }) => {
  return (
    <div className="HireMe">
      {lookingForJob ? (
        <>
          <div className="HireMe__Status">
            <div className="HireMe__LiveIndicator">
              <div className="HireMe__LiveIndicatorWaves" />
            </div>
            <div className="HireMe__LiveText">
              Considering new opportunities
            </div>
          </div>
          <div className="HireMe__Controls">
            <Button href={getLinkByAlias('cv')} cta>
              See my CV
            </Button>
          </div>
        </>
      ) : (
        <div className="HireMe__Unavailable">
          <p>I am not actively looking for new opportunities</p>
          <p>But we could still stay in touch!</p>
        </div>
      )}

      <div className="HireMe__SocialLinks">
        <a
          className="HireMe__SocialLink"
          href="https://github.com/ikushlianski"
        >
          <img
            className="HireMe__SocialLinkImage"
            src="/github.svg"
            alt="github"
          />
        </a>
        <a
          className="HireMe__SocialLink"
          href="https://www.linkedin.com/in/ilya-kushlianski"
        >
          <img
            className="HireMe__SocialLinkImage"
            src="/linkedin.svg"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};
