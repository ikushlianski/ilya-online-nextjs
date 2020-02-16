import React from 'react';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

const WorksPage = () => (
  <Layout
    title="Ilya Kushlianski - Portfolio"
    description="Works by Ilya Kushlianski, from oldest ones back in 2017 to newest and planned projects, all with Github links"
  >
    <div className="WorksPage">
      <Block>Here will be my works</Block>
    </div>
  </Layout>
);

export default WorksPage;
