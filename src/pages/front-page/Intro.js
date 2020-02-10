import React from 'react';

import { Button } from '../../ui-kit';

import './Intro.scss';

export const Intro = () => (
  <div className="Intro">
    <div className="Intro__Image"></div>
    <p className="Intro__Primary">Ilya Kushlianski</p>
    <p className="Intro__Secondary">Full-stack Javascript developer</p>
    <Button cta>See my CV</Button>
  </div>
);
