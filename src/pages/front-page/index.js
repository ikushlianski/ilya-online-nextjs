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
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [lookingForJob, setLookingForJob] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    fetch(`${process.env.API_URL}/job/status`)
      .then(res => res.json())
      .then(({ open }) => {
        setLookingForJob(open);
      })
      .catch(error => {
        console.error(error);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

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
      {/*<Block className="Block--darker">*/}
      {/*  <MyTopSkills />*/}
      {/*</Block>*/}
      <Block>
        <HireMe lookingForJob={lookingForJob} loading={loading} error={error} />
      </Block>
    </Layout>
  );
};

export default FrontPage;
