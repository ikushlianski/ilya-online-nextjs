import React from 'react';
import dayjs from 'dayjs';

import { Block, Button, Card } from '../../ui-kit';
import { Layout } from '../../components/Layout';

import './AboutPage.scss';

const AboutPage = () => (
  <Layout title="Ilya Kushlianski - About me">
    <div className="AboutMePage">
      <Block id="Coding">
        <h1 className="AboutMePage__Heading">Coding</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">
              What sources do you use to learn?
            </h3>
            <p>
              I did almost all learning on my own, without any courses or
              bootcamps. I just told myself not to be afraid and try. I found
              online courses offering both theory and practice. And there it
              goes! Then I delved deeper into a couple of Javascript and PHP
              books. For CSS, it was more practice and Stack Overflow Q&A.
            </p>
            <p>
              After gaining some experience I switched to reading various
              articles in blogs, on Medium, CSS Tricks, Dev.to and others about
              best practices of what I already knew.
            </p>
            <p>
              Currently I&apos;m subscribed to lots of newsletters which I read
              a couple of times a week or per-problem basis. I also understood
              the value of documentation, which I now study for each new
              technology I pick. In addition, I have a separate YouTube account,
              only for tech videos, and I watch it regularly.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">How do you learn code?</h3>
            <p>
              Can&apos;t tell you anything new here, since it&apos;s all about
              practice in the end. I do my personal projects and in every new
              project I try to learn and practise some new technologies.
            </p>
            <Button secondary href="/works">
              See my projects
            </Button>
            <p>
              For theory, I use a technique called &lsquo;spaced
              repetition&rsquo;. I have lots of Anki decks and cards with
              questions about a particular technology or language. This allows
              me to keep my knowledge fresh on any topic I&apos;m currently
              working with.
            </p>
            <p>
              Courses, articles, docs, newsletters and thematic videos are also
              part of my learning strategy.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Do you focus only on JS?</h3>
            <p>
              I believe a good engineer can switch between languages without
              much difficulty, but since it&apos;s impossible to focus on many
              things at once I chose for now to thoroughly learn JS and its rich
              ecosystem.
            </p>
            <p>
              Besides JS and React, I also learned PHP and databases, how to
              configure servers and work with Linux, how to use some AWS
              services and many other smaller things and concepts. But I am not
              ready to say I know them well, because I did not spend enough time
              working with those technologies.
            </p>
            <p>
              So my focus is on Javascript, React and Node, but other
              technologies are not excluded. It&apos;s just about priorities.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">
              How do you handle errors and difficulties when coding?
            </h3>
            <p>
              Sometimes it gets frustrating when you keep banging your head
              against a problem and still cannot get things working properly.
              But I treat this normally and think this is good to keep learning
              while making mistakes. Moreover, it&apos;s totally ok for me to
              ask for help, but only after I&apos;ve tried all the known options
              myself.
            </p>
          </Card>
        </div>
      </Block>

      <Block id="Personal">
        <h1 className="AboutMePage__Heading">Personal</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">
              What is your workplace, what work conditions do you prefer?
            </h3>
            <p>
              In the office, the most important is to have a separate room for
              my team. I don&apos;t like open spaces (who does?)
            </p>
            <p>
              I can tolerate some noise, especially when guys are discussing
              some engineering stuff.
            </p>
            <p>
              From the tech side, it would be cool to have 2 big monitors
              instead of one. A comfortable chair and a powerful dev Linux
              machine are all I need.
            </p>
            <p>
              Otherwise, I do not really have any special requirements to a
              workplace. Coffee, shower, all that stuff? Cool to have it, of
              course, but not mission critical :)
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">QQQ?</h3>
          </Card>
        </div>
      </Block>

      <Block id="WorkCareer">
        <h1 className="AboutMePage__Heading">Work & Career</h1>
        <div className="AboutMePage__QA">
          {Date.now() < dayjs('2020-06-30') && (
            <Card flat>
              <h3 className="AboutMePage__Q">
                Why are you leaving your current company?
              </h3>
              <p>
                Because of lack of pure web projects. When taking this job 2
                years ago I did not yet pay that much attention to what a
                company does. It was about matching my skills with
                companies&apos; requirements. Klika Tech&apos;s main domain is
                IoT and almost all projects the company could offer me were just
                frontend for IoT devices, while I want a full-stack web project.
              </p>
              <p>
                At the same time I&apos;m grateful to the company for letting me
                gain valuable experience and assigning me to one of the few
                projects without an IoT component.
              </p>
            </Card>
          )}

          <Card flat>
            <h3 className="AboutMePage__Q">
              What domains are you interested in?
            </h3>
            <p>
              I would like to develop web applications in such areas as real
              estate, tourism, booking services, lifestyle, sport, fintech,
              education or entertainment, but these are just a few areas of
              interest.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">
              Describe the project of your dream
            </h3>
            <p>
              Team: not very large, 3-10 people. A skilled and friendly team
              lead and talented devs who write quality code and with whom you
              grow as a professional.
            </p>
            <p>
              Product: develop a full-stack web application, where both frontend
              and backend is developed together, by our team. This product is
              already in use or will shortly be in use by lots of people, so the
              team will get feedback from real users instantly.
            </p>
            <p>
              Processes: something at least resembling Scrum. No strict time
              tracking (I am a reliable person and prove it everywhere I work).
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">
              What are your overall career plans?
            </h3>
            <p>
              In the coming years I&apos;m planning to keep coding and improve
              my skills a lot (both frontend and backend). At the same time I am
              willing to assume more responsibilities like interviewing and
              mentoring of junior devs. Further, I see myself in a management
              position (PM or team lead).
            </p>
          </Card>
        </div>
      </Block>
    </div>
  </Layout>
);

export default AboutPage;
