import React from 'react';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

const CVPage = () => (
  <Layout
    title="Ilya Kushlianski - CV"
    description="Download printable CV of Ilya Kushlianski, full-stack Javascript developer."
  >
    <div className="CVPage">
      <Block>Hi from CV page!</Block>
    </div>
  </Layout>
);

export default CVPage;
