import React from 'react';

import { Button } from '../../ui-kit';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

import './Motivation.scss';

export const Motivation = () => {
  return (
    <div className="Motivation">
      <h2 className="Motivation__Header">Why I enjoy what I do</h2>
      <ul className="Motivation__List">
        <li className="Motivation__ListGroup">
          <ul>
            <li className="Motivation__ListItem">
              I want to build{' '}
              <span className="Motivation__Accent">
                awesome applications based on cost-effective and flexible
                architecture
              </span>
            </li>
            <li className="Motivation__ListItem">
              Coding is a Lego with endless pieces. This is where I get{' '}
              <span className="Motivation__Accent">
                the freedom of creation
              </span>{' '}
              and new knowledge sources
            </li>
          </ul>
        </li>
        <li className="Motivation__ListGroup">
          <ul>
            <li className="Motivation__ListItem">
              In programming, I value not only quality coding and challenging
              tasks, but also{' '}
              <span className="Motivation__Accent">
                fruitful, professional and respectful communication with the
                customer, end users and my team{' '}
              </span>
            </li>
            <li className="Motivation__ListItem">
              I am excited to help businesses{' '}
              <span className="Motivation__Accent">
                solve challenges of modern day and stay competitive
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
