import React from 'react';

import { Button } from '../../ui-kit/Button';

import './MyTopSkills.scss';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

export const MyTopSkills = ({ topSkills }) => {
  return (
    <div className="MySkills">
      {topSkills && topSkills.length > 0 ? (
        <>
          <h2 className="MySkills__Header">Major skills</h2>
          <div className="MySkills__SkillsList">
            {topSkills
              .sort((a, b) => a.order - b.order)
              .map(skill => (
                <div className="MySkills__Box" key={skill._id}>
                  <img
                    className="MySkills__Skill"
                    src={`/${skill.image}`}
                    alt={skill.name}
                  />
                </div>
              ))}
          </div>
          {topSkills.length > 0 && (
            <div className="MySkills__Controls">
              <Button href={getLinkByAlias('skills')} inverted>
                Explore all my skills
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="MySkills__NotFound">No top skills found</div>
      )}
    </div>
  );
};
