import React from 'react';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';

import './SkillsPage.scss';

const SkillsPage = () => (
  <Layout
    title="Ilya Kushlianski - Skills"
    description="List of Ilya Kushlianski's skills: front-end and backend details. I never stop working to improve my skillset, to create quality software that solves business challenges."
  >
    <div className="SkillsPage">
      <div className="SkillsPage__Animation" />
      <Block>
        <div className="SkillsPage__SkillsList">
          <ul style={{ lineHeight: '5rem' }}>
            <li>Some skill</li>
            <li>Some skill</li>
            <li>Some skill</li>
            <li>Some skill</li>
            <li>Some skill</li>
            <li>Some skill</li>
            <li>Some skill</li>
          </ul>
        </div>
      </Block>
    </div>
  </Layout>
);

export default SkillsPage;
