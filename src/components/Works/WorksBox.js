import React from 'react';
import dayjs from 'dayjs';

import { Card, Button, List } from '../../ui-kit';

import './WorksBox.scss';

export const WorksBox = ({ title, items = [] }) => {
  return (
    <div className="WorksBox">
      <h2 className="WorksBox__Title">{title}</h2>
      <ul className="WorksBox__List">
        {items.map(
          ({
            _id,
            name,
            description,
            techStack,
            repos,
            live: liveLink,
            level,
            date,
            goals,
            toImprove,
          }) => (
            <li key={_id} className="WorksBox__Item">
              <Card>
                <div className="WorksBox__Meta">
                  <div className="WorksBox__ItemName">{name}</div>
                  <div className="WorksBox__Date">
                    Date:{' '}
                    {date ? (
                      dayjs(date).format('MMMM YYYY')
                    ) : (
                      <span className="WorksBox__OngoingLabel">Ongoing</span>
                    )}
                  </div>
                  <div className="WorksBox__TechStack">
                    Tech stack: {techStack}
                  </div>
                </div>

                <div className="WorksBox__ItemDescription">{description}</div>

                <div className="WorksBox__Repos">
                  {repos.length > 0 &&
                    repos.map((repo, i, arr) => (
                      <Button inverted href={repo} key={repo}>
                        {arr.length > 1 ? `Repo ${i + 1}` : 'Repository'}
                      </Button>
                    ))}
                </div>
                {liveLink && (
                  <div className="WorksBox__LiveLink">
                    <Button cta href={liveLink} key={liveLink}>
                      See live
                    </Button>
                  </div>
                )}
                {goals && <List title="Why I created this one" items={goals} />}
                {toImprove && (
                  <List title="What could be improved" items={toImprove} />
                )}
              </Card>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
