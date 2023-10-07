import React from 'react';

import './Advantages.scss';

export const Advantages = () => {
  return (
    <div className="Advantages">
      <h2 className="Advantages__Header">What project I am interested in</h2>
      <div className="Advantages__Content">
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Domain:</div>
          Any end-user-oriented project, preferably a project from scratch or
          very little legacy code
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Tech stack:</div>
          {process.env.MODE === 'fe'
            ? 'A front-end Javascript/Typescript React project, possibly GraphQL, Next.js etc. with more accent on logic rather than purely CSS work. Some backend Node.js work could be also possible'
            : 'A full-stack React/Node.js project, Typescript, Amazon Web Services, Postgres/MongoDB, GraphQL, microservices'}
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Processes:</div>
          Well-established planning, grooming and estimation processes (or let
          us set them up together!)
        </p>
        <p className="Advantages__Text">
          <div className="Advantages__Accent">Testing & quality:</div>I would be
          glad to join a team boasting high engineering culture, who value
          testing and make pipelines that allow sleeping well at night
        </p>
      </div>
    </div>
  );
};
