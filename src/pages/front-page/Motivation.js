import React from 'react';

import { Button } from '../../ui-kit/Button';

import './Motivation.scss';

export const Motivation = () => {
  // TODO: interleave soft skills with tech skills

  return (
    <div className="Motivation">
      <h2 className="Motivation__Header">Why I enjoy coding</h2>
      <ul className="Motivation__List">
        <li className="Motivation__ListGroup">
          <ul>
            <li className="Motivation__ListItem">
              I want to be behind awesome products that{' '}
              <span className="Motivation__Accent">help people</span>
            </li>
            <li className="Motivation__ListItem">
              Coding is my Lego with endless pieces. This is where I get{' '}
              <span className="Motivation__Accent">
                the freedom of creation
              </span>
              .
            </li>
          </ul>
        </li>
        <li className="Motivation__ListGroup">
          <ul>
            <li className="Motivation__ListItem">
              I prefer{' '}
              <span className="Motivation__Accent">
                clearly organized systems
              </span>{' '}
              and maintainable code
            </li>
            <li className="Motivation__ListItem">
              I am excited{' '}
              <span className="Motivation__Accent">to assist businesses</span>{' '}
              in solving challenges of modern day and staying competitive
            </li>
          </ul>
        </li>
      </ul>
      <div className="Motivation__Controls">
        <Button inverted>More about me</Button>
      </div>
    </div>
  );
};
