import React from 'react';

import './Advantages.scss';

export const Advantages = () => {
  return (
    <div className="Advantages">
      <h2 className="Advantages__Header">What project I am interested in</h2>
      <div className="Advantages__Content">
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Team:</div>A team of 5-10
          developers (backend, frontend, full-stack)
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Domain:</div>
          Any end-user-oriented project, preferably a project from scratch or
          very little legacy code
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Tech stack:</div>
          Preferably a full-stack React/Node project, or a backend project
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Communication:</div>
          Communication with the customer / stakeholders / engineers on a daily
          basis
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Outlook:</div>I continue growing
          as a developer (esp. backend). Next step is Team Lead position
        </p>
      </div>
    </div>
  );
};
