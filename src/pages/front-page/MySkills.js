import React from 'react';

import { Button } from '../../ui-kit/Button';

import './MySkills.scss';

export const MySkills = () => {
  return (
    <div className="MySkills">
      {/* TODO: make them clickable with info about each skill */}
      <h2 className="MySkills__Header">Major skills</h2>
      <div className="MySkills__SkillsList">
        <div className="MySkills__Box">
          <img
            className="MySkills__Skill"
            src="/javascript.png"
            alt="Javascript"
          />
        </div>
        <div className="MySkills__Box">
          <img
            className="MySkills__Skill"
            src="/typescript.png"
            alt="Typescript"
          />
        </div>
        <div className="MySkills__Box">
          <img className="MySkills__Skill" src="/node.png" alt="Node.js" />
        </div>
        <div className="MySkills__Box">
          <img className="MySkills__Skill" src="/react.png" alt="React.js" />
        </div>
      </div>
      <div className="MySkills__Controls">
        <Button inverted>Explore all my skills</Button>
      </div>
    </div>
  );
};
