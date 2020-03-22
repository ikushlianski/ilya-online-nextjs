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
              <b>Frontend:</b> Javascript, Typescript, React (Hooks, Redux,
              Redux Saga), CSS (Flexbox, Grid, Styled Components), HTML, some
              Next.js; unit testing basics;
            </p>
            <p>
              <b>Backend:</b> Node.js, Express, basic Nest.js, MySQL/Sequelize,
              MongoDB/Mongoose fundamentals;
            </p>
            <p>
              <b>Tools & misc:</b> Git, Webpack, ESLint, npm; basic CI/CD with
              Linux, Docker, Jenkins and Nginx; worked with some AWS services.
              Know clean code principles and best practices. Always think about
              architectural implications of the features I implement.
            </p>
            <p>
              <b>Soft skills:</b> Transparency in team work (Jira, Pivotal
              Tracker), fluent English, leadership, mentoring. Comfortable
              working in a Scrum team. Would love to take part in interviews,
              meetings with customers and continue developing
              leadership/managerial skills.
            </p>
            {extended && (
              <p>
                <b>Plans:</b> Advanced Node.js, React SSR, PWAs, React Native,
                GraphQL, React Testing Library, broaden web security and
                performance knowledge and more...
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

          {extended && (
            <div className="CVAbout">
              <div className="CVAbout__DescriptionCode">
                <h3>Coding</h3>
                <p>
                  I tend to focus on what value my code brings to the end user
                  or business. The beauty of code I write is in user
                  satisfaction - with this in mind I started programming willing
                  to build a website for what I thought would become my future
                  business.
                </p>
                <p>
                  Cleanliness and maintainability of code are important to me. I
                  always keep in mind what effect my programming decisions will
                  have on the product&apos;s architecture although it is not
                  always easy to do. This is something seniors should care about
                  and I&apos;m already preparing myself to it.
                </p>
                <p>
                  I am not religious about any technology and think each one is
                  just a tool that is to be used for its purposes. I curiously
                  watch the evolution of the web, but focus on specific, most
                  popular and well-tested, libraries and frameworks, thereby
                  making my work smooth and enjoyable.
                </p>
                <p>
                  Having decided to stay in Javascript ecosystem, I&apos;m
                  always open to learning new things as soon as they let me
                  solve users&apos; and businesses&apos; problems effectively.
                </p>
              </div>
              <div className="CVAbout__DescriptionCommon">
                <h3>About me, actually</h3>
                <p>
                  I am a self-demanding person striving for constant
                  self-perfection. Working in teams of smart people gives me the
                  enjoyable feeling of togetherness and allows sharing knowledge
                  and gaining experience quicker.
                </p>
                <p>
                  I have always felt my leadership potential, hence I would like
                  to take respective responsibilities in the coming years, like
                  managing small teams or mentoring beginner developers.
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
