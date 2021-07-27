import React from 'react';
import dayjs from 'dayjs';

import { CVContext } from '../../pages/cv';
import { getTotalExperience } from '../../utils';

import './CVBody.module.scss';

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
              <b>Frontend:</b> Javascript, Typescript, React (Hooks, Redux,
              Redux Saga), CSS (Flexbox, some Grid, Styled Components), HTML,
              some Next.js;
            </p>
            <p>
              <b>Backend:</b> Node.js, Express, Postgres, Redis, TypeORM,
              Sequelize, basic Nest.js. Learned some AWS services (incl. Lambda,
              S3, CloudFront, DynamoDB, ECS, CloudFormation, SNS/SQS) and
              Serverless Framework. Prefer working on Linux; knowledge of web
              security and web performance best practices;
            </p>
            <p>
              <b>Tools & misc:</b> Jest, React Testing Library, GraphQL, Git,
              Webpack, ESLint, npm, SonarQube; Docker and docker-compose;
              understanding of CI/CD, Jenkins, Nginx and some k8s. Know clean
              code and clean architecture principles and best practices. Always
              think about the architectural implications of the features I
              implement.
            </p>
            <p>
              <b>Soft skills:</b> Transparency in team work (Jira, Pivotal
              Tracker), written and spoken English (C1+), leadership, mentoring,
              basic interviewing skills. Comfortable with Scrum processes and
              remote work environment.
            </p>
            {extended && (
              <p>
                <b>Plans:</b> React SSR, PWAs, application monitoring,
                microservice architecture, system design and more...
              </p>
            )}
          </div>
          {extended && (
            <div className="TechStackInfo__Languages">
              <h3>Languages</h3>
              <p>
                <b>English:</b> advanced (written and spoken)
              </p>
              <p>
                <b>Swedish:</b> intermediate
              </p>
              <p>
                <b>Russian/Belarusian:</b> native
              </p>
            </div>
          )}
        </div>

        <div
          className={`ExperienceEducationWrapper ${
            notes || extended ? 'ExperienceEducationWrapper--oneColumn' : ''
          }`}
        >
          <div className="CVExperience">
            <h3>Engineering experience</h3>
            <div className="CVExperience__Places">
              {jobs.map(job => {
                const startDate = dayjs(job.start).format('MMMM YYYY');
                const endDate = job.end
                  ? dayjs(job.end).format('MMMM YYYY')
                  : 'present';

                return (
                  <React.Fragment key={job.name}>
                    <div className="CVExperience__Years">
                      {`${startDate} - ${endDate}`}
                      <p className="CVExperience__MonthsTotal">
                        {getTotalExperience([job])}
                      </p>
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
                  </React.Fragment>
                );
              })}
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
                  <React.Fragment key={`${edu.establishment} ${edu.specialty}`}>
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
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {extended && (
            <div className="CVAbout">
              <div className="CVAbout__DescriptionCommon">
                <h3>About me, actually</h3>
                <p>
                  I am a self-demanding person striving for constant
                  self-perfection. Working in teams of smart people gives me the
                  enjoyable feeling of togetherness and allows sharing knowledge
                  and gaining experience quicker.
                </p>
                <p>
                  I have always felt my leadership potential, hence I am working
                  towards becoming Lead Developer in the coming years.
                </p>
                <p>
                  A polite and empathic person, I prefer compromise to conflict
                  and value open and friendly people. I feel comfortable working
                  according to Scrum practices, in a team with reasonable rules
                  and balanced processes. If there are no such things in your
                  team, let us build them together!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
