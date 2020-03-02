import React from 'react';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

import './CVPage.scss';

const CVPage = () => (
  <Layout
    title="Ilya Kushlianski - CV"
    description="Printable CV of Ilya Kushlianski, full-stack Javascript developer."
  >
    <div className="CVPage">
      <Block className="CVPage__SmallScreensWarning">
        Please open this CV on a larger device
        <div className="CVPage__Shrug">¯\_(ツ)_/¯</div>
      </Block>
    </div>
  </Layout>
);

export default CVPage;
