import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Block } from '../../ui-kit';
import { Layout } from '../../components';
import { keyBy } from '../../utils';
import { WorksBox } from '../../components';

import './WorksPage.scss';

const WorksPage = ({ works }) => {
  const { beginner, intermediate, advanced } = works;

  return (
    <Layout
      title="Ilya Kushlianski - Portfolio"
      description="Works by Ilya Kushlianski, from oldest ones back in 2017 to newest projects, all with Github links"
    >
      <div className="WorksPage">
        <div className="WorksPage__Intro">
          <h1 className="WorksPage__PageTitle">Pet projects</h1>
          <p className="WorksPage__PageDescription">
            It is hard sometimes to carve out time for coding apart from your
            regular job. But that is how you grow as a developer - working on
            your pet projects.
          </p>
          <p>
            Most of them are tiny and some are incomplete but they all serve one
            purpose: try a particular new tech or approach I cannot try on
            production projects
          </p>
          <p>
            Here they are: from the newest and bigger ones, to the first, naive
            projects that mark the beginning of my web dev journey.
          </p>
        </div>
        <Block>
          <div className="WorksPage__Blocks">
            <WorksBox title="Advanced examples" items={advanced} />
            <WorksBox title="Small/beginner examples" items={beginner} />
          </div>
        </Block>
      </div>
    </Layout>
  );
};

export const getStaticProps = async _ => {
  try {
    const res = await fetch(`${process.env.API_URL}/works`);
    const json = await res.json();

    const withoutHidden = json.filter(item => !item.hidden);

    const works = Object.entries(keyBy(withoutHidden, 'group')).reduce(
      (acc, [groupName, worksGroup]) => {
        acc[groupName] = worksGroup.sort((a, b) => b.date - a.date);

        return acc;
      },
      {},
    );

    return { props: { works } };
  } catch (error) {
    console.error(error);

    return { works: {} };
  }
};

export default WorksPage;
