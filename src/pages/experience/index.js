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
            full-stack Javascript developer at major Belarusian and Ukrainian IT
            companies.
          </p>
          <p>
            A business-oriented web developer, I care about both user interface
            quality and backend efficiency. I focus on building clean
            architectures that are adaptable to new feature requests.{' '}
          </p>
          <p>
            Prefer backend or full-stack positions to continue growing as a web
            developer.
          </p>
        </Card>

        <Card>
          <ExperienceCard
            company={'Star Global / SourceTER'}
            position={'Senior Software Engineer / Team Lead'}
            dates={'2022'}
            projectDescription={
              'An existing portal allows providers to intake and process anonymized data from various sources and for consumers to build use cases on top of that data. Our goal is to extend the existing portal with tooling for data processing, analysis and exploration in an easy and user-friendly way'
            }
            techStack={
              'Typescript, React.js, GraphQL, Jest, React Testing Library, Storybook, AWS (QuickSight, Lambda, DynamoDB etc.), Serverless Framework, micro-frontend architecture with Webpack'
            }
            responsibilities={[
              'Led a team of three frontend developers, prioritized tasks and organized overall work',
              'Developed key business features for the QuickSight integration into Cloud Data Portal',
              'Clarified and managed customer requirements and expectations from the tech and business standpoint',
              'Managed Jira backlog, in sync with BA, regarding the technical feasibility of various features',
              'Taught the team to stay focused on the priorities and be transparent in both code repository management and communication with the customer via all channels (email, Jira, Confluence, Bitbucket etc.)',
              'Organized and moderated dev discussions between the architect and backend, frontend and devops teams to stay in sync and comply with contracts, which helped speed up product integration',
            ]}
          />
        </Card>

        <Card>
          <ExperienceCard
            company={'iTechArt Group'}
            position={'Senior Software Engineer'}
            dates={'2021'}
            projectDescription={
              'An e-commerce microservice app, particularly developing checkout system and integrations with various payment systems'
            }
            techStack={
              'Typescript, Node.js, Express, GraphQL, REST, Jest, AWS (DynamoDB, Lambda, SNS/SQS)'
            }
            responsibilities={[
              'Developed payment integrations, backend APIs and microservices',
              'Managed Jira backlog, split tasks into granular and easily digestible sub-tasks',
              'Groomed business requirements to come up with realistic feature readiness timelines',
              'Conducted developer interviews',
            ]}
          />
        </Card>

        <Card>
          <ExperienceCard
            company={'EPAM Systems'}
            position={'Senior Software Engineer'}
            dates={'2020-2021'}
            projectDescription={
              'Backend development of API and ETL process for an e-commerce company, everyday communication with customer discussing data, business logic and integrations, technical backlog management'
            }
            techStack={
              'TypeScript, Node.js, Express.js, PostgreSQL, Docker, Redis, AWS, Google Cloud Platform, Jest'
            }
            responsibilities={[
              'Developed key parts of backend microservices, integrations with payment and other APIs',
              'Set up infrastructure as code using Serverless Framework, used basic CloudFormation',
              'Effectively communicated with devs, leads, architects and business analysts from other service teams',
              "Managed the technical side of the backlog, in sync with BAs, and taking into account the customer's business priorities",
              'Regularly discussed contracts with other service teams so our work is in sync',
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
              'Ensured the technical feasibility of UI/UX designs',
              'Implemented designs that work across all modern desktop and mobile browsers',
              'Developed BFF for several frontend clients to improve client-side performance',
              'Communicated with customers in English on a daily basis, clarifying requirements and suggesting improvements and multiple solutions',
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
