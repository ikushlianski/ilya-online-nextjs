import React from 'react';
import dayjs from 'dayjs';

import { CVContext } from '../../pages/cv';
import { getTotalExperience } from '../../utils';
import { Button } from '../../ui-kit';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

import './CVBody.scss';

export const CVBody = ({ jobs, education }) => {
  const { notes, extended } = React.useContext(CVContext);

  return (
    <div className={`CVPage__Body ${notes ? 'CVPage__Body--withGutter' : ''}`}>
      <div
        className="CVPage__Gutter"
        style={{ visibility: notes ? 'visible' : 'hidden' }}
      >
        <h3>Notes</h3>
      </div>
      <div className="CVPage__BodyContent">
        <div
          className={`TechStackInfo ${
            extended ? '' : 'TechStackInfo--oneColumn'
          }`}
        >
          <div className="TechStackInfo__SkillsList">
            <h3>Skills</h3>
            <p>
              <b>Backend:</b> Node.js, Express, Nest.js. SQL, Postgres, some
              MongoDB and Redis; ORMs (TypeORM, Sequelize, Prisma). AWS services
              (Lambda, S3, IAM, DynamoDB, AppSync, API Gateway, SNS/SQS, CDK).
              Worked mostly with REST and a bit with GraphQL APIs. Fair
              understanding of app security and performance from FE/BE
              perspective;
            </p>
            <p>
              <b>Frontend:</b> Javascript, Typescript, React, Redux,
              Thunks/Sagas, Redux Toolkit, RTK Query; GraphQL (Apollo), Next.js.
              CSS (Flexbox, Styled Components, some Grid, BEM), preprocessors
              and UI libs. Some micro frontend experience;
            </p>
            <p>
              <b>Dev Tools:</b> Jest, React Testing Library, Cypress; Git,
              Webpack (incl. module federation), ESLint, Postman, npm,
              SonarQube; Docker and docker-compose; understand CI/CD, worked
              with Github Actions, Serverless Framework, Terraform, AWS CDK and
              CloudFormation. Know clean code and clean architecture principles
              and best practices. Interested in studying software architecture
              of web apps;
            </p>
            <p>
              <b>Soft skills:</b> Transparency in team work, advanced Jira
              backlog management (requirements gathering, story linking,
              acceptance criteria, comments, fostering transparency in dev
              work), engineering hygiene (clean code, commit culture),
              architectural mindset, attention to details, fluent English,
              leadership skills. Comfortable with Scrum processes and remote
              work environment. Interested in conducting technical interviews
              and mentoring activities;
            </p>
            {extended && (
              <div>
                <p>
                  <b>Plans:</b> Remix, React Query, Vite, ESBuild, PWAs, system
                  design, web scalability, Elastic stack, messaging services,
                  AWS certification and more...
                </p>
              </div>
            )}
          </div>
        </div>

        {extended && (
          <>
            <h3 style={{ pageBreakAfter: 'avoid' }}>About me</h3>
            <div className="CVAbout">
              <div className="CVAbout__DescriptionCommon">
                <p>
                  I am a self-demanding person striving for constant
                  self-perfection. I value teams with well-built processes and
                  high engineering culture.
                </p>
                <p>
                  My goal on every project is to help build transparent and
                  flexible processes that help achieve business goals and make
                  developer lives easier.
                </p>
                <p>
                  I work hard to produce clean and maintainable code, while
                  always keeping in mind the architectural side of things and
                  the application in its entirety (backend and front-end).
                  Trying to stay on top of latest dev trends, I understand that
                  knowing the fundamentals is always paramount.
                </p>
                <p>
                  A polite and empathic person, I prefer compromise to conflict
                  and value open and friendly people.
                </p>
              </div>
            </div>
          </>
        )}

        <div className="ExperienceEducationWrapper">
          <div className="CVExperience">
            <h3 style={{ pageBreakAfter: 'avoid' }}>Engineering experience</h3>
            <div className="CVExperience__Places">
              {jobs.map(job => {
                const startDate = dayjs(job.start).format('MMMM YYYY');
                const endDate = job.end
                  ? dayjs(job.end).format('MMMM YYYY')
                  : 'present';

                return (
                  <div key={job.name} className="CVExperience__Place">
                    <div className="CVExperience__Years">
                      {`${startDate} - ${endDate}`}
                      <p className="CVExperience__MonthsTotal">
                        {getTotalExperience([job])}
                      </p>
                      {job.location && (
                        <p className={'CVExperience__Location'}>
                          {job.location}
                        </p>
                      )}
                    </div>
                    <div className="CVExperience__Details">
                      <div className="CVExperience__Company">
                        <b>{job.name}</b>
                      </div>
                      <div className="CVExperience__Title">{job.title}</div>
                      <p className="CVExperience__Description">
                        {job.description}
                      </p>
                      {job.techStack && (
                        <p className="CVExperience__Stack">
                          Tech stack: {job.techStack.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="CVPage__ExperienceLink">
              <Button secondary href={getLinkByAlias('experience')}>
                Detailed experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
