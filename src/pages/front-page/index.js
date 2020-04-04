import React from 'react';

import {
  Intro,
  Advantages,
  ExperienceYears,
  Motivation,
  HireMe,
} from '../../components/FrontPage';
import { MyTopSkills } from '../../components/FrontPage/MyTopSkills';

import { Block, Section } from '../../ui-kit';
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
          <HireMe
            lookingForJob={lookingForJob}
            loading={loading}
            error={error}
          />
        </Block>
        <Block>
          <Advantages />
        </Block>
      </Section>
      <Block className="Block--darker">
        <MyTopSkills />
      </Block>
      <Block className="hidden-md">
        <HireMe lookingForJob={lookingForJob} loading={loading} error={error} />
      </Block>
    </Layout>
  );
};

export default FrontPage;
