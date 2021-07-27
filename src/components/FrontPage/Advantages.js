import React from 'react';

import { Button } from '../../ui-kit/Button';

import styles from './Advantages.module.scss';

export const Advantages = () => {
  return (
    <div className={styles.Advantages}>
      <h2 className="Advantages__Header">What project I am interested in</h2>
      <div className={styles.Advantages__Content}>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Team:</div>
          Small or medium-sized team
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Domain:</div>
          Any end-user-oriented project, preferably a project from scratch
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Tech stack:</div>
          Preferably a full-stack React and Node project, or a backend project
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Communication:</div>
          Would be nice to communicate with customers on a daily basis
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Outlook:</div>I continue growing
          as a developer. Next step is Team Lead position
        </p>
      </div>
    </div>
  );
};
