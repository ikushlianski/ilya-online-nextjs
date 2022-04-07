import React from 'react';

import { Block, Card } from '../../ui-kit';
import { Layout } from '../../components';

import './ExperiencePage.scss';

const ExperiencePage = () => (
  <Layout title="Ilya Kushlianski - Experience">
    <div className="ExperiencePage">
      <Block className="ExperiencePage__Block">
        <Card>
          <h1>Experience summary</h1>
          <p>
            Started as a freelancer and then worked for major Belarusian and
            Ukrainian IT companies.
          </p>
          <p>
            A business-oriented web developer, who cares about both user
            interface quality and backend efficiency. I focus on building clean
            architectures that are adaptable to new feature requests.{' '}
          </p>
          <p>
            Especially interested in domains like real estate, e-commerce,
            tourism, media, lifestyle, sport, fintech, education, entertainment
            and more.
          </p>
          <p>
            Prefer backend or full-stack positions to continue growing as a web
            developer.
          </p>
        </Card>
      </Block>
    </div>
  </Layout>
);

export default ExperiencePage;
