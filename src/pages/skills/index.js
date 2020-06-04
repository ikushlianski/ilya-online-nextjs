import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Block, Toggle } from '../../ui-kit';
import { Layout } from '../../components/Layout';
import { SkillsBox } from '../../components/Skills';
import { keyBy } from '../../utils';

import './SkillsPage.scss';

export const SkillsDisplayModeContext = React.createContext();

const SkillsPage = ({ skills }) => {
  const [techMode, setTechMode] = React.useState(false);

  React.useEffect(() => {
    const techMode = Boolean(localStorage.getItem('techMode'));

    if (techMode) {
      setTechMode(techMode);
    }
  }, []);

  const {
    frontend = [],
    backend = [],
    devTools = [],
    misc = [],
    future = [],
  } = skills;

  const handleToggleMode = techMode => {
    setTechMode(techMode);

    techMode
      ? localStorage.setItem('techMode', true)
      : localStorage.removeItem('techMode');
  };

  return (
    <Layout
      title="Ilya Kushlianski - Skills"
      description="List of Ilya Kushlianski's skills: front-end and backend details. I never stop improving my skillset to deliver quality software that solves business challenges."
    >
      <SkillsDisplayModeContext.Provider value={techMode}>
        <div className="SkillsPage">
          <div className="SkillsPage__Animation" />
          <div className="SkillsPage__ToggleSection">
            <span className="SkillsPage__Mode">HR mode</span>
            <Toggle
              onChange={() => handleToggleMode(!techMode)}
              value={techMode}
              checked={techMode}
            />
            <span className="SkillsPage__Mode">Techie mode</span>
          </div>
          <Block>
            <div className="SkillsPage__SkillsBlocks">
              <SkillsBox title="Frontend" items={frontend} />
              <SkillsBox title="Backend" items={backend} />
              <SkillsBox title="Dev Tools" items={devTools} />
              <SkillsBox title="Miscellaneous" items={misc} />
              <SkillsBox title="Learning plans" items={future} />
            </div>
          </Block>
        </div>
      </SkillsDisplayModeContext.Provider>
    </Layout>
  );
};

export const getStaticProps = async _ => {
  try {
    const res = await fetch(`${process.env.API_URL}/skills`);
    const json = await res.json();

    const skills = Object.entries(keyBy(json, 'group')).reduce(
      (acc, [groupName, skillGroup]) => {
        acc[groupName] = skillGroup.sort((a, b) => a.order - b.order);

        return acc;
      },
      {},
    );

    return { props: { skills } };
  } catch (error) {
    console.error(error);

    return { skills: {} };
  }
};

export default SkillsPage;
