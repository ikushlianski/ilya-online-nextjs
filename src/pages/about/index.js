import React from 'react';

import { Block, Card } from '../../ui-kit';
import { Layout } from '../../components/Layout';

import './AboutPage.scss';

const AboutPage = () => (
  <Layout title="Ilya Kushlianski - About me">
    <div className="AboutMePage">
      <Block className="Block--lighter">
        <h1 className="AboutMePage__Heading">Coding</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">Question</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at
              consectetur eaque facere incidunt libero, quos! Blanditiis
              corporis dolores eveniet nam numquam quasi recusandae sunt?
              Blanditiis consequuntur dicta ea inventore laboriosam odio
              sapiente! Alias deserunt eius facilis quae quo repellat.
            </p>
          </Card>
          <Card flat>
            <h3 className="AboutMePage__Q">Question 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus architecto consequatur distinctio, doloribus ducimus
              eaque exercitationem fugit illum in iste labore laudantium maiores
              maxime nulla odit, officiis omnis perferendis recusandae rem
              sapiente sed sunt tempore temporibus velit veniam vitae voluptatem
              voluptates. Adipisci doloribus dolorum, esse, illum iusto porro
              quaerat quas quidem repudiandae similique tempora vitae!
            </p>
          </Card>
          <Card flat>
            <h3 className="AboutMePage__Q">Question 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at
              consectetur eaque facere incidunt libero, quos! Blanditiis
              corporis dolores eveniet nam numquam quasi recusandae sunt?
              Blanditiis consequuntur dicta ea inventore laboriosam odio
              sapiente! Alias deserunt eius facilis quae quo repellat.
            </p>
          </Card>
        </div>
      </Block>

      <Block>
        <h1 className="AboutMePage__Heading">Personal</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">Question</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              enim fuga iste itaque laboriosam nam neque odio odit optio
              recusandae, saepe similique sint tempora ullam voluptates!
              Accusamus esse facere harum ipsam minus omnis placeat quasi
              recusandae repellendus vitae. Aspernatur deserunt et eveniet
              facere labore necessitatibus perspiciatis quod sapiente tempore
              voluptates?
            </p>
          </Card>
        </div>
      </Block>

      <Block className="Block--darker">
        <h1 className="AboutMePage__Heading">Career</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">Question</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              enim fuga iste itaque laboriosam nam neque odio odit optio
              recusandae, saepe similique sint tempora ullam voluptates!
              Accusamus esse facere harum ipsam minus omnis placeat quasi
              recusandae repellendus vitae. Aspernatur deserunt et eveniet
              facere labore necessitatibus perspiciatis quod sapiente tempore
              voluptates?
            </p>
          </Card>
        </div>
      </Block>
    </div>
  </Layout>
);

export default AboutPage;
