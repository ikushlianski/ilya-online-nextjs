import React from 'react';
import fetch from 'isomorphic-unfetch';

import {
  Intro,
  Advantages,
  ExperienceYears,
  Motivation,
  HireMe,
} from '../../components';
import { MyTopSkills } from '../../components';

import { Block, Section } from '../../ui-kit';
import { Layout } from '../../components';

import '../../styles/styles.scss';

const FrontPage = ({ topSkills }) => {
  return (
    <Layout className="HomePage">
      <Block className="p0-md">
        <Intro />
      </Block>

      <Block className="Block--darker">
        {topSkills && <MyTopSkills topSkills={topSkills} />}
      </Block>

      <Block className="hidden-md">
        <HireMe lookingForJob={process.env.LOOKING_FOR_JOB === 'true'} />
      </Block>

      <Section id="motivation-advantages" className="col-2-md">
        <Block className="shown-md">
          <HireMe lookingForJob={process.env.LOOKING_FOR_JOB === 'true'} />
        </Block>
        <Block>
          <Advantages />
        </Block>
      </Section>

      <Section darker className="col-2-md">
        <Block>
          <Motivation />
        </Block>
        <Block>
          <ExperienceYears />
        </Block>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async _ => {
  try {
    const skills = await fetch(`${process.env.API_URL}/skills/top`);
    const topSkills = await skills.json();

    return {
      props: { topSkills },
    };
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default FrontPage;
