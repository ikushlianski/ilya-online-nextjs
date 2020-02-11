import React from 'react';

import { Button } from '../../ui-kit/Button';

import './Motivation.scss';

export const Motivation = () => {
  // TODO: interleave soft skills with tech skills

  return (
    <div className="Motivation">
      <h2 className="Motivation__Header">Why I enjoy coding</h2>
      <ul className="Motivation__List">
        <li className="Motivation__ListItem">reason 1</li>
        <li className="Motivation__ListItem">reason 2</li>
        <li className="Motivation__ListItem">reason 3</li>
      </ul>
      <Button>About me</Button>
    </div>
  );
};
