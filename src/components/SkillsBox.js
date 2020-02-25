import React from 'react';

import './SkillsBox.scss';
import { SkillsDisplayModeContext } from '../pages/skills';

export const SkillsBox = ({ title, items = [] }) => {
  const techMode = React.useContext(SkillsDisplayModeContext);

  return (
    <div className="SkillsBox">
      <h3 className="SkillsBox__Title">{title}</h3>
      <ul className="SkillsBox__List">
        {items.map(({ _id, name, hot, frequency, description }) => (
          <li key={_id} className="SkillsBox__Item">
            <div className="SkillsBox__ItemName">{name}</div>

            {hot && <span className="SkillsBox__Mark">{'\u{1F525}'}</span>}

            <div className="SkillsBox__ItemFamiliarity">{frequency}</div>

            {techMode && (
              <div className="SkillsBox__ItemDescription">{description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
