import React from 'react';

import './Advantages.scss';

export const Advantages = () => {
  return (
    <div className="Advantages">
      <h2 className="Advantages__Header">What project I am interested in</h2>
      <div className="Advantages__Content">
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Team:</div>A team of 5-10
          developers (backend, full-stack)
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Domain:</div>
          Any end-user-oriented project, preferably a project from scratch or
          very little legacy code
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Tech stack:</div>A
          full-stack/backend React/Node project, Typescript, Amazon Web
          Services, Postgres/MongoDB, GraphQL, microservices
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Processes:</div>
          Well-established planning, grooming and estimation processes (or let
          us set them up together)
        </p>
      </div>
    </div>
  );
};
