import React from 'react';

import { SkillsDisplayModeContext } from '../pages/skills';

import './SkillsBox.scss';

export const SkillsBox = ({ title, items = [] }) => {
  const techMode = React.useContext(SkillsDisplayModeContext);

  return (
    <div className="SkillsBox">
      <h3 className="SkillsBox__Title">{title}</h3>
      <ul className="SkillsBox__List">
        {items.map(
          ({
            _id,
            name,
            hot,
            frequency,
            description,
            workedWith,
            yetToLearn,
          }) => (
            <li key={_id} className="SkillsBox__Item">
              <div className="SkillsBox__ItemName">{name}</div>

              {hot && (
                <span className="SkillsBox__Mark" title="Top skill">
                  {'\u{1F525}'}
                </span>
              )}

              <div className="SkillsBox__ItemDescription">{description}</div>

              {techMode && frequency && (
                <div className="SkillsBox__ItemUsage">
                  <b>Use:</b> {frequency}
                </div>
              )}

              {techMode && (
                <div className="SkillsBox__ProsCons">
                  {workedWith.length > 0 && (
                    <div className="SkillsBox__Learned">
                      <b>Learned:</b>
                      <ul>
                        {workedWith.map(aspect => (
                          <li key={aspect}>{aspect}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {yetToLearn.length > 0 && (
                    <div className="SkillsBox__YetToLearn">
                      <b>Yet to learn:</b>
                      <ul>
                        {yetToLearn.map(aspect => (
                          <li key={aspect}>{aspect}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
