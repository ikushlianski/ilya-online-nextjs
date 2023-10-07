import React from 'react';

import { Block, Button, Card } from '../../ui-kit';
import { Layout } from '../../components';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';

import './ExperiencePage.scss';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

const ExperiencePage = () => (
  <Layout title="Ilya Kushlianski - Experience">
    <div className="ExperiencePage">
      <Block className="ExperiencePage__Block">
        <Card>
          <h1>My experience in detail</h1>
          <p>
            I started out as a freelancer back in 2017 and continued as a
            {process.env.MODE !== 'fe' && 'full-stack'} Javascript developer at
            major Belarusian and Ukrainian IT companies. Moved to Poland in
            2023.
          </p>
          <p>
            A business-oriented web developer, I care about
            {process.env.MODE === 'fe'
              ? ' UI quality and performance'
              : ' both user interface quality and backend efficiency'}
            . I focus on building clean architectures that are adaptable to
            always-changing business requirements.{' '}
          </p>
          <p>
            Prefer $
            {process.env.MODE === 'fe' ? 'frontend' : 'backend or full-stack'}{' '}
            positions to continue growing as a web developer.
          </p>
        </Card>

        <Card>
          <ExperienceCard
            company={'Star Global'}
            position={'Senior Software Engineer'}
            dates={'2021-present'}
            projectDescription={
              'An existing portal allows providers to intake and process anonymized data from various sources and for consumers to build use cases on top of that data. Our goal is to extend the existing portal with tooling for data processing, analysis and exploration in an easy and user-friendly way'
            }
            techStack={
              'Javascript, Typescript, React.js, GraphQL (Apollo), Node.js, Neo4j, Jest, React Testing Library, Storybook, AWS, micro-frontend architecture with Webpack'
            }
            responsibilities={[
              'Feature development and support for an existing application using React.js, Redux, GraphQL, and Node.js/AWS',
              'ETL process development using AWS Glue and Lambdas',
              'Improve data quality in the production application without impact on the user base',
              'Took part in building a custom component library based on Material UI, so it can be reused on various micro-frontends',
              'Was active proponent of proper task decomposition, requirements analysis and sprint planning',
              'Set up code deployment pipelines by automating as much as possible',
              'Ensure the application meets both security and performance best standards, proactively highlight issues and agree on additional time for fixing them',
              'In line with the boyscout principle, gradually refactor existing code',
              'Start using feature flags so the business/management can toggle features on and off',
              'Lead project documentation efforts, so that onboarding of new engineers is streamlined and transition to other teams goes smoothly',
              'Organized and moderated dev discussions between the architect and backend, frontend and devops teams to stay in sync and comply with contracts, which helped speed up part of the product',
            ]}
          />
        </Card>

        <Card>
          <ExperienceCard
            company={'iTechArt Group'}
            position={'Senior Software Engineer'}
            dates={'2021'}
            projectDescription={
              'Build and support an e-commerce app, mostly frontend, particularly the checkout system and integrations with various payment systems'
            }
            techStack={
              'Javascript, Typescript, React, DynamoDB, AWS IAM, Serverless Framework, Jest'
            }
            responsibilities={[
              'Worked on an e-commerce microservice app, particularly developing the checkout system and integrations with various payment systems',
              'Led grooming efforts and task decomposition',
              'Led efforts to increase test coverage for the critical functionality, thus reducing the number of issues detected by the QA team',
              'Initiated a move to Typescript to increase type-safety on the new part of the project',
              'Led efforts to increase test coverage for the critical functionality, thus reducing the number of issues detected by the QA team',
              'Initiated a move to Typescript to increase type-safety on the new part of the project',
            ]}
          />
        </Card>

        <Card>
          <ExperienceCard
            company={'EPAM Systems'}
            position={'Senior Software Engineer'}
            dates={'2020-2021'}
            projectDescription={
              'Developed key parts of an e-commerce platform, with rich UI functionality like pricing, filtering, shopping cart etc. using Typescript, React and its ecosystem'
            }
            techStack={
              'TypeScript, React.js, Node.js, Express.js, SQL, Postgres, Google Cloud Platform, Jest, React Testing Library, Webpack, CSS3, Material UI, Node.js, Docker'
            }
            responsibilities={[
              'Developed parts of microservices, integrations with payment and other kinds of APIs',
              'Set up infrastructure as code using Serverless Framework',
              'Built an ETL process to deliver data from S3 to the application database',
              'Effectively communicated with devs, leads, architects and business analysts from other service teams, discussed contracts between service teams so we stay in sync',
              'Proposed new validation and linting approaches on the project, which reduced code review efforts and simplified the codebase',
              "Managed the technical side of the backlog, in sync with BAs, and taking into account the customer's business priorities",
            ]}
          />
        </Card>

        <Card>
          <ExperienceCard
            company={'Klika Tech'}
            position={'Software Engineer'}
            dates={'2018-2020'}
            projectDescription={
              'Frontend and some backend development for a foreign company offering AI-based business process automation'
            }
            techStack={
              'JavaScript, TypeScript, HTML, CSS, SCSS, React.js, Node.js, Express.js'
            }
            responsibilities={[
              'Ensured the technical feasibility of UI/UX designs suggesting improvements and discussing various options given specific business timelines',
              'Implemented designs that work across all modern desktop and mobile browsers',
              'Developed an Express-based backend-for-frontend solution for several frontend clients to aggregate data for the UI layer and thus improve client-side performance',
              'Communicated with customers in English on a daily basis, clarifying requirements, splitting tasks into more granular ones for the team to take into sprints',
              'Gathered requirements, did usability analysis and prototyping',
            ]}
          />
        </Card>

        <Card>
          <ExperienceCard
            company={'Freelance software development'}
            position={'Freelance engineer'}
            dates={'2017-2018'}
            responsibilities={[
              'Designing and implementing HTML, CSS and JS/jQuery frontend for the news website of the CTV TV company, where I worked as a translator',
              'Some PHP development on the backend (Wordpress, Drupal, MySQL)',
              'Completed a free PHP/JS lab at EPAM Systems, who selected people with existing basic IT knowledge to make them ready for production projects',
              'Courses and side projects (JS, CSS, SASS, Angular 2)',
              'Freelance frontend development and bugfixing',
            ]}
          />
        </Card>

        <div className="ExperiencePage__CVLink">
          <Button secondary href={getLinkByAlias('cv')}>
            Go to my CV
          </Button>
        </div>
      </Block>
    </div>
  </Layout>
);

export default ExperiencePage;
