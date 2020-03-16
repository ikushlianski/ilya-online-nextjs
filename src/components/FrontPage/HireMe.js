import React from 'react';

import { Button } from '../../ui-kit/Button';

import './HireMe.scss';

export const HireMe = ({ loading, error, lookingForJob }) => {
  if (loading) {
    return <div className="HireMe__Loading">Loading...</div>;
  }

  return (
    <div className="HireMe">
      {lookingForJob && !error ? (
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
            <Button href="/cv" cta>
              Get & print my CV...
            </Button>
          </div>
        </>
      ) : (
        <div className="HireMe__Unavailable">
          <p>I am not currently looking for new opportunities</p>
          <p>But let us stay in touch!</p>
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
