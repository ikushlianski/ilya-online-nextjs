import React from 'react';

import { Button } from '../../ui-kit/Button';

import './Advantages.scss';

export const Advantages = () => {
  return (
    <div className="Advantages">
      <h2 className="Advantages__Header">What project I am interested in</h2>
      <div className="Advantages__Content">
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Team:</div>
          Small or medium-sized team
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Domain:</div>
          Any end-user-oriented project, preferably the one that has started or
          is going to start
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Tech stack:</div>
          Preferably a full-stack React and Node project, or a frontend project
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Communication:</div>
          Would be nice to communicate with a foreign customer on a daily basis
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Outlook:</div>I want to grow as a
          developer and, later, take managerial responsibilities
        </p>
      </div>
    </div>
  );
};
