import React from 'react';

import { Intro } from './Intro';
import { ExperienceYears } from './ExperienceYears';
import { Motivation } from './Motivation';
import { HireMe } from './HireMe';
import { MySkills } from './MySkills';

import { Block } from '../../ui-kit';
import { Layout } from '../../components/Layout';

import '../../styles/styles.scss';

const FrontPage = () => {
  // TODO: fetch "looking for job" status
  const lookingForJob = true;

  return (
    <Layout className="HomePage">
      <Block>
        <Intro />
      </Block>
      <Block className="Block--darker">
        <ExperienceYears />
      </Block>
      <Block>
        <Motivation />
      </Block>
      <Block className="Block--darker">
        <MySkills />
      </Block>
      <Block>
        <HireMe lookingForJob={lookingForJob} />
      </Block>
    </Layout>
  );
};

export default FrontPage;
