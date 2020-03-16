import React from 'react';

import { Intro } from '../../components/FrontPage/Intro';
import { ExperienceYears } from '../../components/FrontPage/ExperienceYears';
import { Motivation } from '../../components/FrontPage/Motivation';
import { HireMe } from '../../components/FrontPage/HireMe';
import { MyTopSkills } from '../../components/FrontPage/MyTopSkills';

import { Block } from '../../ui-kit';
import { Layout } from '../../components/Layout';

import '../../styles/styles.scss';

const FrontPage = () => {
  const [loading, setLoading] = React.useState(true);
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
      <Block className="Block--darker">
        <MyTopSkills />
      </Block>
      <Block>
        <HireMe lookingForJob={lookingForJob} loading={loading} error={error} />
      </Block>
    </Layout>
  );
};

export default FrontPage;
