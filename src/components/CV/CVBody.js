import React from 'react';
import dayjs from 'dayjs';

import { CVContext } from '../../pages/cv';
import { getTotalExperience } from '../../utils';

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
              <b>Frontend:</b> Javascript, Typescript, React, CSS (Flexbox,
              Grid), HTML, some Next.js; unit testing basics;
            </p>
            <p>
              <b>Backend:</b> Node.js, Express, basic Nest.js, MySQL/Sequelize,
              MongoDB/Mongoose;
            </p>
            <p>
              <b>Tools & misc:</b> Git, Webpack, ESLint, npm; basic CI/CD with
              Linux, Docker, Jenkins and Nginx; worked with some AWS services.
              Familiar with clean code principles and best practices. Always
              think about architectural implications of the features I
              implement.
            </p>
            <p>
              <b>Soft skills:</b> Transparency in team work, fluent English,
              leadership, mentoring. Comfortable working in a Scrum team. Would
              love to take part in interviews, meetings with customers and
              continue developing leadership/managerial skills.
            </p>
            {extended && (
              <p>
                <b>Plans:</b> Advanced Node.js, React SSR, PWA, React Native,
                GraphQL, React Testing Library, web security and performance and
                more
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
            <h3>Experience ({getTotalExperience(jobs)})</h3>
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
        </div>
      </div>
    </div>
  );
};
