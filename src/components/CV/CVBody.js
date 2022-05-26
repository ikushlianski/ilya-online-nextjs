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
              <b>Frontend:</b> Javascript, Typescript, React, Redux,
              Thunks/Sagas, Redux Toolkit; GraphQL (Apollo), Next.js. CSS
              (Flexbox, Styled Components, some Grid), preprocessors and UI
              libs. Micro frontend experience;
            </p>
            <p>
              <b>Backend:</b> Node.js, Express, Nest.js. SQL, Postgres, MongoDB,
              Redis, TypeORM, Sequelize. AWS services (Lambda, S3, IAM,
              DynamoDB, CloudFront, SNS/SQS), Serverless Framework. Apache Kafka
              basics. Worked with REST and GraphQL APIs. Fair understanding of
              app security and performance from FE/BE perspective;
            </p>
            <p>
              <b>Misc:</b> Jest, React Testing Library, Git (command line),
              Webpack (incl. module federation), ESLint, Postman, npm,
              SonarQube; Docker and docker-compose; understanding of CI/CD,
              Github Actions, basic Terraform and CloudFormation. Know clean
              code and clean architecture principles and best practices.
              Interested in studying software architecture of web apps;
            </p>
            <p>
              <b>Soft skills:</b> Transparency in team work, advanced Jira
              backlog management, attention to details, fluent English,
              leadership skills. Comfortable with Scrum processes and remote
              work environment. Interested in conducting technical interviews
              for junior/mid-level engineers and mentoring activities;
            </p>
            {extended && (
              <div>
                <p>
                  <b>Plans:</b> Remix, React Query, Cypress, PWAs, system
                  design, web scalability, Elastic stack, messaging services,
                  AWS certification and more...
                </p>
              </div>
            )}
          </div>
          {extended && (
            <div className="TechStackInfo__Languages">
              <h3>Languages</h3>
              <p>
                <b>English</b>
                <br />
                <small>advanced (written/spoken)</small>
              </p>
              <p>
                <b>Swedish</b>
                <br />
                <small>intermediate</small>
              </p>
              <p>
                <b>Belarusian/Russian</b>
                <br />
                <small>native</small>
              </p>
            </div>
          )}
        </div>

        <div className="ExperienceEducationWrapper">
          <div className="CVExperience">
            <h3>Engineering experience</h3>
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

          <div className="CVEducation">
            <h3>Education</h3>
            <div className="CVEducation__Places">
              {education.map(edu => {
                const startDate = dayjs(edu.start).format('MMMM YYYY');
                const endDate = edu.end
                  ? dayjs(edu.end).format('MMMM YYYY')
                  : 'present';

                return (
                  <div
                    key={`${edu.establishment} ${edu.specialty}`}
                    className="CVEducation__Place"
                  >
                    <div className="CVEducation__Years">
                      {`${startDate} - ${endDate}`}
                    </div>
                    <div className="CVEducation__Details">
                      <div className="CVEducation__Establishment">
                        <b>{edu.establishment}</b>
                      </div>
                      <div className="CVEducation__Specialty">
                        {edu.specialty}
                      </div>
                      <p className="CVEducation__Description">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {extended && (
            <div className="CVAbout">
              <div className="CVAbout__DescriptionCommon">
                <p>
                  I am a self-demanding person striving for constant
                  self-perfection. I have always felt my leadership potential,
                  hence I am working towards becoming a Lead Developer in the
                  coming years.
                </p>
                <p>
                  A polite and empathic person, I prefer compromise to conflict
                  and value open and friendly people. I value teams with
                  well-built processes.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
