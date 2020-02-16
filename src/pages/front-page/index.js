import React from 'react';

import { Intro } from '../../components/Intro';
import { ExperienceYears } from '../../components/ExperienceYears';
import { Motivation } from '../../components/Motivation';
import { HireMe } from '../../components/HireMe';
import { MyTopSkills } from '../../components/MyTopSkills';

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
        <MyTopSkills />
      </Block>
      <Block>
        <HireMe lookingForJob={lookingForJob} />
      </Block>
    </Layout>
  );
};

export default FrontPage;
