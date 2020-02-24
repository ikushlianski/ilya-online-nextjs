import React from 'react';

import './SkillsBox.scss';
import { SkillsDisplayModeContext } from '../pages/skills';

export const SkillsBox = ({ title, items = [] }) => {
  const techMode = React.useContext(SkillsDisplayModeContext);

  return (
    <div className="SkillsBox">
      <h3 className="SkillsBox__Title">{title}</h3>
      <ul className="SkillsBox__List">
        {items.map(skill => (
          <li key={skill.id} className="SkillsBox__Item">
            <div className="SkillsBox__ItemName">{skill.name}</div>
            <span className="SkillsBox__Mark">{skill.wannaWorkWith}</span>
            <div className="SkillsBox__ItemFamiliarity">
              {skill.familiarity}
            </div>
            {techMode && (
              <div className="SkillsBox__ItemDescription">
                {skill.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
