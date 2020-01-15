import React from 'react';

import { Layout } from '../../components/Layout';
import { Button } from '../../ui-kit/Button';
import { Block } from '../../ui-kit/Block';

import '../../styles/styles.scss';
import './front-page.scss';

const FrontPage = () => {
  return (
    <Layout>
      <div className="HomePage">
        <Block>
          <div className="Intro">
            <div className="Intro__Image"></div>
            <p className="Intro__Primary">Ilya Kushlianski</p>
            <p className="Intro__Secondary">Javascript developer</p>
            <Button cta>See my CV</Button>
          </div>
        </Block>
      </div>
    </Layout>
  );
};

export default FrontPage;
