import React from 'react';

import { Button } from '../ui-kit/Button';

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
              I want to be behind{' '}
              <span className="Motivation__Accent">
                awesome and useful products
              </span>
            </li>
            <li className="Motivation__ListItem">
              Coding is a Lego with endless pieces. This is where I get{' '}
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
              I am excited to help businesses{' '}
              <span className="Motivation__Accent">
                solve challenges of modern day and stay competitive
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <div className="Motivation__Controls">
        <Button inverted href="/about">
          More about me
        </Button>
      </div>
    </div>
  );
};
