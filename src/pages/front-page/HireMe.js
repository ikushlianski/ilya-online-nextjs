import React from 'react';

import { Button } from '../../ui-kit/Button';

import './HireMe.scss';

export const HireMe = ({ lookingForJob }) => {
  return (
    <div className="HireMe">
      {lookingForJob ? (
        <>
          {/*<h2 className="HireMe__CTA">If you are interested, let us talk!</h2>*/}
          <div className="HireMe__Status">
            <div className="HireMe__LiveIndicator">
              <div className="HireMe__LiveIndicatorWaves" />
            </div>
            <div className="HireMe__LiveText">
              Considering new opportunities
            </div>
          </div>
          <div className="HireMe__Controls">
            <Button inverted>Get my CV</Button>
          </div>
        </>
      ) : (
        <div className="HireMe__Unavailable">
          <div>
            <p>I am not currently looking for new opportunities</p>
            <p>But let us stay in touch!</p>
          </div>
          <a
            className="HireMe__LinkedIn"
            href="https://www.linkedin.com/in/ilya-kushlianski"
          >
            <img
              className="HireMe__LinkedInImage"
              src="/linkedin.svg"
              alt="Linkedin"
            />
          </a>
        </div>
      )}

      {/* TODO: make them clickable with info about each skill */}
      <h2 className="HireMe__MainSkillsHeader">My main skills</h2>
      <div className="HireMe__MainSkills">
        <div className="HireMe__Box">
          <img
            className="HireMe__MainSkill"
            src="/typescript.png"
            alt="Typescript"
          />
        </div>
        <div className="HireMe__Box">
          <img className="HireMe__MainSkill" src="/node.png" alt="Node.js" />
        </div>
        <div className="HireMe__Box">
          <img className="HireMe__MainSkill" src="/react.png" alt="React.js" />
        </div>
      </div>
      <div className="HireMe__Controls">
        <Button inverted>Explore all my skills</Button>
      </div>

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
