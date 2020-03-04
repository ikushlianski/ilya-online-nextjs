import React from 'react';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

import './CVPage.scss';

const CVPage = () => {
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
              <h3 className="CVPage__Title">Full-stack Javascript Developer</h3>
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
              <div className="CVPage__TechStackInfo">
                <div className="CVPage__SkillsList">
                  <h3>Skills</h3>
                  <p>
                    <b>Frontend:</b> Javascript, Typescript, React, CSS
                    (Flexbox, Grid), HTML, Next.js;
                  </p>
                  <p>
                    <b>Backend:</b> Node.js, Express, Nest.js, MySQL/Sequelize,
                    MongoDB/Mongoose;
                  </p>
                  <p>
                    <b>Tools:</b> Git, Webpack, ESLint, basic CI/CD with Linux,
                    Bash scripting, Docker, Jenkins and Nginx, some AWS services
                  </p>
                </div>
                <div className="CVPage__Languages">
                  <h3>Languages</h3>
                  <p>
                    <b>English:</b> advanced
                  </p>
                  <p>
                    <b>Swedish:</b> intermediate
                  </p>
                </div>
              </div>

              <div className="CVPage__Experience">
                <p>some experience 1</p>
                <p>some experience 2</p>
                <p>some experience 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
