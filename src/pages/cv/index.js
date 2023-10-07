import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Block, Button } from '../../ui-kit';
import { Layout, CVOptions, CVHeader, CVBody } from '../../components';
import { sortChronologically } from '../../utils/sorting';

import './CVPage.scss';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

export const CVContext = React.createContext(null);

const CVPage = ({ jobs, education }) => {
  const [value, setValue] = React.useState({
    extended: true,
    notes: false,
  });

  return (
    <Layout
      title="Ilya Kushlianski - CV"
      description={`CV of Ilya Kushlianski, ${
        process.env.MODE === 'fe' ? '' : 'full-stack'
      } Javascript developer. More than just a coder"`}
    >
      <div className="CVPage">
        <Block className="CVPage__SmallScreensWarning">
          <p>Please open this CV on a desktop screen</p>
          <p>
            <small>Want a quick overview of my experience?</small>
          </p>
          <Button inverted href={getLinkByAlias('experience')}>
            Details
          </Button>
        </Block>
        <CVContext.Provider value={value}>
          <CVOptions setValue={setValue} />
          <div className="CVPage__Sheet">
            <CVHeader />
            <CVBody jobs={jobs} education={education} />
          </div>
        </CVContext.Provider>
      </div>
    </Layout>
  );
};

export const getStaticProps = async _ => {
  try {
    const res = await fetch(`${process.env.API_URL}/cv`);
    const [data] = await res.json();

    data.jobs.sort(sortChronologically);

    return { props: { jobs: data.jobs, education: data.education.reverse() } };
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default CVPage;
