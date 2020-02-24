import React from 'react';
import fetch from 'isomorphic-unfetch';

import { Block, Toggle } from '../../ui-kit';
import { Layout } from '../../components/Layout';
import { SkillsBox } from '../../components/SkillsBox';

import './SkillsPage.scss';

export const SkillsDisplayModeContext = React.createContext();

const SkillsPage = ({ skills }) => {
  const [techMode, setTechMode] = React.useState(false);
  // TODO: preserve chosen mode

  let { frontend, backend, devTools, misc, future } = skills;
  frontend = [
    {
      id: '123422',
      name: 'Javascript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur commodi cum cupiditate doloremque earum fugiat impedit itaque laudantium, molestias natus quis saepe. A aliquam, culpa error illum ipsum iste iusto labore laboriosam nulla odio optio placeat, possimus praesentium tempore voluptas. Amet, aut corporis excepturi harum illo optio tempore! Numquam?',
      frequency: 'every day',
      familiarity: 'I think I know it well',
      wannaWorkWith: '\ud83d\udd25',
      topSkill: true,
      workedWith: ['aspect 1', 'aspect 2', 'aspect 3'],
      didNotWorkWith: ['aspect 4', 'aspect 5', 'aspect 6'],
    },
    {
      id: '12348',
      name: 'CSS',
      description:
        'Consectetur adipisicing elit. Adipisci aspernatur commodi cum cupiditate doloremque earum fugiat impedit itaque laudantium, molestias natus quis saepe. Amet, aut corporis excepturi harum illo optio tempore! Numquam?',
      frequency: 'from time to time',
      familiarity: 'Know major stuff but do not work with it daily',
    },
    {
      id: '12347',
      name: 'Typescript',
      description:
        'Consectetur adipisicing elit. Adipisci aspernatur commodi cum cupiditate doloremque earum fugiat impedit itaque laudantium, molestias natus quis saepe. Amet, aut corporis excepturi harum illo optio tempore! Numquam?',
      frequency: 'Quite often',
      familiarity: 'Sufficient for production use',
      wannaWorkWith: '\ud83d\udd25',
      workedWith: [
        'Set it up with React',
        'Used it with Angular 2',
        'Set it up from scratch with Webpack',
      ],
      didNotWorkWith: [
        'Did not use much TS with OOP',
        'Did not author libraries in TS',
      ],
    },
    {
      id: '12345',
      name: 'SASS',
      description:
        'Consectetur adipisicing elit. Adipisci aspernatur commodi cum cupiditate doloremque earum fugiat impedit itaque laudantium, molestias natus quis saepe. Amet, aut corporis excepturi harum illo optio tempore! Numquam?',
      frequency: 'sometimes',
      familiarity: 'Intermediate',
    },
  ];

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
            <Toggle onChange={() => setTechMode(!techMode)} value={techMode} />
            <span className="SkillsPage__Mode">Techie mode</span>
          </div>
          <Block>
            <div className="SkillsPage__SkillsBlocks">
              <SkillsBox title="Frontend" items={frontend} />
              <SkillsBox title="Backend" items={backend} />
              <SkillsBox title="Dev Tools" items={future} />
              <SkillsBox title="Miscellaneous" items={misc} />
              <SkillsBox title="Learning plans" items={future} />
            </div>
          </Block>
        </div>
      </SkillsDisplayModeContext.Provider>
    </Layout>
  );
};

SkillsPage.getInitialProps = async _ => {
  try {
    // I wouldn't hardcode this on a real project
    const res = await fetch('https://ilya.online/api/skills');
    const json = await res.json();

    return { skills: json.skills };
  } catch (error) {
    console.error(error);

    return { skills: {} };
  }
};

export default SkillsPage;
