import React from 'react';

import { Button } from '../../ui-kit';

import './Intro.scss';

export const Intro = () => (
  <div className="Intro">
    <img src="/ilya.jpeg" alt="Ilya Kushlianski" className="Intro__Image" />
    <p className="Intro__Primary">Ilya Kushlianski</p>
    <p className="Intro__Secondary">Full-stack Javascript developer</p>
    <div className="Intro__Controls">
      <Button cta href="/cv">
        See my CV
      </Button>
    </div>
  </div>
);
