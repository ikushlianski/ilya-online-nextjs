import React from 'react';
import dayjs from 'dayjs';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

import './CVPage.scss';
import fetch from 'isomorphic-unfetch';

import SkillsPage from '../skills';

const CVPage = ({ jobs }) => {
  const hasGutter = true;

  return (
    <Layout
      title="Ilya Kushlianski - CV"
      description="Printable CV of Ilya Kushlianski, full-stack Javascript developer."
    >
      <div className="CVPage">
        <Block className="CVPage__SmallScreensWarning">
          Please open this CV on a larger device
          <div className="CVPage__Shrug">¯\_(ツ)_/¯</div>
        </Block>
        <div className="CVPage__Sheet">
          <div className="CVPage__MainInfo">
            <div className="CVPage__MainInfoLeft">
              <img
                src="/ilya.jpeg"
                alt="Ilya Kushlianski"
                className="CVPage__Photo"
              />
            </div>
            <div className="CVPage__MainInfoRight">
              <h1 className="CVPage__Name">Ilya Kushlianski</h1>
              <h2 className="CVPage__Title">Full-stack Javascript Developer</h2>
              <div className="CVPage__Contacts">
                <div className="CVPage__Email">
                  <b>Email:</b>{' '}
                  <a href="mailto:kushliansky@gmail.com">
                    kushliansky@gmail.com
                  </a>
                </div>
                <div className="CVPage__Phone">
                  <b>Phone:</b> +375 (29) 608 8900
                </div>
                <div className="CVPage__Age">
                  <b>Age:</b> {new Date().getFullYear() - 1991}
                </div>
                <div className="CVPage__Location">
                  <b>Location:</b> Minsk, Belarus
                </div>
                <div className="CVPage__Website">
                  <b>Website:</b>{' '}
                  <a href="https://ilya.online">https://ilya.online</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`CVPage__Body ${
              hasGutter ? 'CVPage__Body--withGutter' : ''
            }`}
          >
            <div
              className="CVPage__Gutter"
              style={{ visibility: hasGutter ? 'visible' : 'hidden' }}
            >
              <h3>Notes</h3>
            </div>
            <div className="CVPage__BodyContent">
              <div className="TechStackInfo">
                <div className="TechStackInfo__SkillsList">
                  <h3>Skills</h3>
                  <p>
                    <b>Frontend:</b> Javascript, Typescript, React, CSS
                    (Flexbox, Grid), HTML, Next.js; unit testing basics;
                  </p>
                  <p>
                    <b>Backend:</b> Node.js, Express, basic Nest.js,
                    MySQL/Sequelize, MongoDB/Mongoose;
                  </p>
                  <p>
                    <b>Tools:</b> Git, Webpack, ESLint, basic CI/CD with Linux,
                    Bash scripting, Docker, Jenkins and Nginx, some AWS services
                  </p>
                  <p>
                    <b>Plans:</b> Advanced Node.js, React SSR, PWA, React
                    Native, GraphQL, React Testing Library, web security and
                    performance and more
                  </p>
                </div>
                <div className="TechStackInfo__Languages">
                  <h3>Languages</h3>
                  <p>
                    <b>English:</b> advanced
                  </p>
                  <p>
                    <b>Swedish:</b> intermediate
                  </p>
                  <p>
                    <b>Russian/Belarusian:</b> native
                  </p>
                </div>
              </div>

              <div className="Experience">
                <h3>Experience ({getTotalExperience(jobs)})</h3>
                <div className="Experience__Jobs">
                  {jobs.map(job => {
                    const startDate = dayjs(job.start).format('MMMM YYYY');
                    const endDate = job.end
                      ? dayjs(job.end).format('MMMM YYYY')
                      : 'present';

                    return (
                      <>
                        <div key={job.name} className="Experience__Years">
                          {`${startDate} - ${endDate}`}
                        </div>
                        <div className="Experience__Details">
                          <div className="Experience__Company">
                            <b>{job.name}</b>
                          </div>
                          <div className="Experience__Title">{job.title}</div>
                          <p className="Experience__Description">
                            {job.description}
                          </p>
                          {job.techStack && (
                            <p className="Experience__Stack">
                              Tech stack: {job.techStack.join(', ')}
                            </p>
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

CVPage.getInitialProps = async _ => {
  try {
    const res = await fetch(`${process.env.API_URL}/cv`);
    const [data] = await res.json();

    return { jobs: data.jobs };
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default CVPage;

const MONTH = 2.628e9;

const getTotalExperience = (jobs = []) => {
  const totalMonths = jobs.reduce((acc, cur) => {
    const end = Date.parse(cur.end) || Date.now();
    const start = Date.parse(cur.start);
    acc += Math.ceil((end - start) / MONTH);

    return acc;
  }, 0);

  const wholeYears = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${wholeYears} years ${months} months`;
};
