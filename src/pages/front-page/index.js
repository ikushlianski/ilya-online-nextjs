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

const FrontPage = ({ lookingForJob, topSkills }) => {
  return (
    <Layout className="HomePage">
      <Block className="p0-md">
        <Intro />
      </Block>
      <Section darker className="col-2-md">
        <Block>
          <Motivation />
        </Block>
        <Block>
          <ExperienceYears />
        </Block>
      </Section>
      <Section id="motivation-advantages" className="col-2-md">
        <Block className="shown-md">
          <HireMe lookingForJob={lookingForJob} />
        </Block>
        <Block>
          <Advantages />
        </Block>
      </Section>
      <Block className="Block--darker">
        {topSkills && <MyTopSkills topSkills={topSkills} />}
      </Block>
      <Block className="hidden-md">
        <HireMe lookingForJob={lookingForJob} />
      </Block>
    </Layout>
  );
};

export const getStaticProps = async _ => {
  try {
    const skills = await fetch(`${process.env.API_URL}/skills/top`);
    const topSkills = await skills.json();

    return {
      props: { lookingForJob: false, topSkills },
    };
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default FrontPage;
