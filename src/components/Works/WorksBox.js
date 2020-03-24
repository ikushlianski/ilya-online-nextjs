import React from 'react';
import dayjs from 'dayjs';

import { Card, Button, List } from '../../ui-kit';

import './WorksBox.scss';

export const WorksBox = ({ title, items = [] }) => {
  return (
    <div className="WorksBox">
      <h2 className="WorksBox__Title">{title}</h2>
      {items.length ? (
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
                  <div className="WorksBox__ItemName">{name}</div>

                  <div className="WorksBox__Meta">
                    <div className="WorksBox__Date">
                      <b>Date:</b>{' '}
                      {date ? (
                        dayjs(date).format('MMMM YYYY')
                      ) : (
                        <span className="WorksBox__OngoingLabel">Ongoing</span>
                      )}
                    </div>
                    <div className="WorksBox__Level">
                      <b>Difficulty:</b> {level}
                    </div>
                    <div className="WorksBox__TechStack">
                      <b>Tech stack:</b> {techStack}
                    </div>
                  </div>

                  <div className="WorksBox__ItemDescription">{description}</div>

                  {repos.length > 0 && (
                    <div className="WorksBox__Repos">
                      {repos.map((repo, i, arr) => (
                        <div className="WorksBox__RepoLink" key={repo}>
                          <Button target="_blank" inverted href={repo}>
                            {arr.length > 1 ? `Repo ${i + 1}` : 'Repository'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  {goals && (
                    <div className="WorksBox__Goals">
                      <List title="Why I created this one" items={goals} />
                    </div>
                  )}
                  {toImprove && (
                    <div className="WorksBox__ToImprove">
                      <List title="What could be improved" items={toImprove} />
                    </div>
                  )}
                  {liveLink && (
                    <div className="WorksBox__LiveLink">
                      <Button
                        target="_blank"
                        cta
                        href={liveLink}
                        key={liveLink}
                      >
                        See live
                      </Button>
                    </div>
                  )}
                </Card>
              </li>
            ),
          )}
        </ul>
      ) : (
        'No works found'
      )}
    </div>
  );
};
