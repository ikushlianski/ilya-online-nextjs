import React from 'react';

import { SkillsDisplayModeContext } from '../../pages/skills';
import { Card } from '../../ui-kit';

import './SkillsBox.scss';

export const SkillsBox = ({ title, items = [] }) => {
  const techMode = React.useContext(SkillsDisplayModeContext);

  return (
    <div className="SkillsBox">
      <h2 className="SkillsBox__Title">{title}</h2>
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
              <Card>
                <div className="SkillsBox__ItemName">{name}</div>

                {hot && (
                  <span className="SkillsBox__Mark" title="Top skill">
                    {'\u{1F525}'}
                  </span>
                )}

                <h3 className="SkillsBox__ItemDescription">{description}</h3>

                {techMode && frequency && (
                  <div className="SkillsBox__ItemUsage">
                    <span className="SkillsBox__Gear">{'\u{2699}'}</span>
                    <b>Use:</b> {frequency}
                  </div>
                )}

                {techMode && (
                  <div className="SkillsBox__ProsCons">
                    {workedWith.length > 0 && (
                      <div className="SkillsBox__Learned">
                        <b>Learned:</b>
                        <ul className="SkillsBox__LearnedList">
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
              </Card>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
