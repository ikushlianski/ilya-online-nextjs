import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Block } from '../../ui-kit/Block';
import { Layout } from '../../components/Layout';
import { keyBy } from '../../utils';
import { WorksBox } from '../../components/Works';

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
          <h1 className="WorksPage__PageTitle">Portfolio</h1>
          <p className="WorksPage__PageDescription">
            It is hard sometimes to carve out time for coding apart from your
            regular job. But that is how you grow as a developer - working on
            your pet projects.
          </p>
          <p>
            Here they are: from the newest, tiny and bigger ones, to the first,
            naive projects that mark the beginning of my web dev journey.
          </p>
        </div>
        <Block>
          <div className="SkillsPage__SkillsBlocks">
            <WorksBox title="Bigger/latest works" items={intermediate} />
            <WorksBox title="Smaller/early examples" items={beginner} />
          </div>
        </Block>
      </div>
    </Layout>
  );
};

WorksPage.getInitialProps = async _ => {
  try {
    const res = await fetch(`${process.env.API_URL}/works`);
    const json = await res.json();

    const works = Object.entries(keyBy(json, 'group')).reduce(
      (acc, [groupName, worksGroup]) => {
        acc[groupName] = worksGroup.sort((a, b) => b.date - a.date);

        return acc;
      },
      {},
    );

    return { works };
  } catch (error) {
    console.error(error);

    return { works: {} };
  }
};

export default WorksPage;
