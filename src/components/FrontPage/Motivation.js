import React from 'react';

import { Button } from '../../ui-kit';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

import './Motivation.scss';

export const Motivation = () => {
  return (
    <div className="Motivation">
      <h2 className="Motivation__Header">Why me</h2>
      <ul className="Motivation__List">
        <li className="Motivation__ListGroup">
          <ul>
            <li className="Motivation__ListItem">
              Have extensive experience in{' '}
              <span className="Motivation__Accent">
                building full-stack web applications from scratch
              </span>
            </li>
            {process.env.MODE !== 'fe' && (
              <li className="Motivation__ListItem">
                <span className="Motivation__Accent">Leadership skills</span>,
                empathetic listener
              </li>
            )}
            <li className="Motivation__ListItem">
              Eager to{' '}
              <span className="Motivation__Accent">
                help build and document team processes
              </span>
              , including from the ground up
            </li>
          </ul>
        </li>
        <li className="Motivation__ListGroup">
          <ul>
            <li className="Motivation__ListItem">
              Business-facing and{' '}
              <span className="Motivation__Accent">
                product-centric mentality
              </span>
              , without sacrificing code quality and maintainability
            </li>
            {process.env.MODE !== 'fe' && (
              <li className="Motivation__ListItem">
                Promote infrastructure as code and{' '}
                <span className="Motivation__Accent">
                  software development automation
                </span>{' '}
              </li>
            )}
            <li className="Motivation__ListItem">
              <span className="Motivation__Accent">
                Advanced written and spoken English
              </span>{' '}
              helps me work efficiently with both tech and non-tech customers
            </li>
            <li className="Motivation__ListItem">
              Encourage proper backlog management, love clean and transparent
              Jira,{' '}
              <span className="Motivation__Accent">
                value and encourage transparency in team work
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <div className="Motivation__Controls">
        <Button inverted href={getLinkByAlias('experience')}>
          My experience
        </Button>
      </div>
    </div>
  );
};
