import React from 'react';
import dayjs from 'dayjs';

import { Block, Button, Card } from '../../ui-kit';
import { Layout } from '../../components/Layout';

import './AboutPage.scss';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

const AboutPage = () => (
  <Layout title="Ilya Kushlianski - About me">
    <div className="AboutMePage">
      <Block id="WorkCareer">
        <h1 className="AboutMePage__Heading">HR information</h1>
        <div className="AboutMePage__QA">
          {Date.now() < dayjs('2021-07-15') && (
            <Card flat>
              <h3 className="AboutMePage__Q">
                Why I am considering changing my current company
              </h3>
              <p>
                I am only considering options this time and might not leave
                EPAM. Projects offered to me were not 100% suitable. I do not
                like huge projects and very tight timelines that make you work
                evenings and even nights (a couple of times that really
                happened).
              </p>
              <p>
                A good interesting project is the key for my decision to change
                the company.
              </p>
            </Card>
          )}

          <Card flat>
            <h3 className="AboutMePage__Q">Domains I am interested in</h3>
            <p>
              I would like to develop web applications in such areas as real
              estate, e-commerce, tourism, media, lifestyle, sport, fintech,
              education or entertainment, but these are just a few areas of
              interest. My choice depends on many other project details as well.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">The project of my dream</h3>
            <p>
              Team: not very large, 5-10 people. A skilled and friendly team
              lead, without self-pride, as well as ambitious devs who write
              quality code and with whom you grow as a professional.
            </p>
            <p>
              Product: a full-stack web application, where you can do both
              frontend and backend development.
            </p>
            <p>
              Processes: Scrum or alike. No minute-by-minute time tracking (do
              you really trust your developers?). Estimations in story points,
              which are not mapped to hours or days.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Overall career plans</h3>
            <p>
              In the coming years I&apos;m planning to keep coding and keep
              improving my hard skills (both frontend and backend). Among plans
              are AWS and possibly Node.js certifications. As my dev skills grow
              I would like to build more complex apps, master best practices of
              CI/CD and try different architectural approaches.
            </p>
            <p>
              At the same time I am willing to assume more leadership
              responsibilities like interviewing and mentoring other devs, take
              part in pre-sales and estimation activities. Further, I would see
              myself in a managerial position (team lead and then engineering
              manager).
            </p>
          </Card>
        </div>
      </Block>

      <Block id="Coding">
        <h1 className="AboutMePage__Heading">Coding</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">Sources I use to learn</h3>
            <p>
              For tech overviews: email listings with valuable articles, YouTube
              videos from conferences and podcasts
            </p>
            <p>
              For learning new things: specs, documentation and video courses.
            </p>
            <p>
              For quick bites, Stack Overflow is the standard (I do not own a
              Copy-Past button though).
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">How I learn code</h3>
            <p>
              It is all about practice in the end. I do my personal projects and
              in every new project I try to learn and give a try to some new
              technologies.
            </p>
            <Button inverted href={getLinkByAlias('works')}>
              See my code examples
            </Button>
            <p>
              For theory, I use a technique called &lsquo;spaced
              repetition&rsquo;. This helps me keep my knowledge fresh on any
              topic I&apos;m currently working with.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Why I focus only on JS</h3>
            <p>
              I believe a good engineer can switch between languages without
              much difficulty, but since it&apos;s impossible to be good at many
              languages at once. I bet on good knowledge of one thing.
            </p>
            <p>
              Besides JS and React, I also spent some time learning PHP and
              databases, which eventually deepened my backend knowledge and led
              me to the server side of things.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Dealing with difficulties</h3>
            <p>
              Banging your head against a problem is frustrating. But as I gain
              more experience this is no more a big difficulty. Now the
              challenge is to build well-maintained code bases with
              forward-looking architecture.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">What is quality code for me</h3>
            <p>
              Developers are right in saying there is no ideal code. For me
              quality means understandable, typed, testable and maintainable
              code.
            </p>
            <p>Linters like Prettier and ESLint are of great help too.</p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Coding vs. business</h3>
            <p>
              I belong to the class of developers for whom coding is
              inextricably linked with the business side of things. I understand
              that our products do not exist in vacuum, there are users out
              there who want their product in the market!
            </p>
            <p>
              I strive to achieve a reasonable balance between quality code and
              changing business requirements.
            </p>
          </Card>
        </div>
      </Block>

      <Block id="Personal">
        <h1 className="AboutMePage__Heading">Personal</h1>
        <div className="AboutMePage__QA">
          <Card flat>
            <h3 className="AboutMePage__Q">How I got into coding</h3>
            <p>
              It all started with a Minsk tourism website I wanted to create,
              but I did not have either money or knowledge required for that. I
              just wanted Belarus to be more famous in the world.
            </p>
            <p>
              I started googling and stumbled into Joomla and Wordpress, but
              without coding skills that was not customizable enough for my
              idea.
            </p>
            <p>
              Despite some self-doubts I decided to give HTML/CSS and Javascript
              a try. I liked it so much that I then dived into PHP and
              databases. Running a Wordpress website I needed to understand the
              whole process, from frontend to backend and even some deployment.
            </p>
            <p>
              I started doing other mini-projects trying the technologies I
              learned. I made an English version of a website for the news
              company I worked for, the first time I was paid for coding. Then
              came other small works and there it goes... I soon landed my first
              programming job.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Preferred work conditions</h3>
            <p>
              COVID-19 changed everything in my life. Now I do not consider any
              office jobs, even when the pandemic goes away.
            </p>
            <p>
              My only tech requirement to any company is to provide their
              employees with powerful enough machines (32GB RAM please!).
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">My weaknesses</h3>
            <p>
              I sometimes find it hard to maintain work-life balance. Sometimes
              when I couldn&apos;t make something work by the end of the day,
              this carries into my evening and I may finish that day in worse
              mood than usual.
            </p>
            <p>
              I am also too cautious and instead of failure I prefer to spend
              more time to ensure I will not fail.
            </p>
            <p>
              Talking to lots of unfamiliar people is a stress for everyone,
              myself included.
            </p>
            <p>
              Finally, I am not firm enough in some communications and if I face
              (passive?) aggression I may not be able to respond adequately,
              which hurts my morale. I need to learn to handle this better.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Me and the team</h3>
            <p>
              I have always had good relations with every team member. My
              manager always noted the friendliness and good atmosphere that I
              create in the team.
            </p>
            <p>
              I never forget what I promised and always deliver. I also
              willingly help my teammates if they are stuck.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">My hobbies</h3>
            <p>
              I love reading about the history of the 20th century, because I
              want to understand why things happened as they did, why Belarus is
              where it is now, why we lag behind many countries.
            </p>
            <p>
              Good music to relax is the best remedy after a hard working day. I
              am fond of fiction books, especially about time travelling.
            </p>
            <p>
              Recently, I dived into urbanism. It is fascinating how people make
              their cities a much better place! Minsk can borrow a lot of ideas
              from around the globe.
            </p>
          </Card>
        </div>
      </Block>
    </div>
  </Layout>
);

export default AboutPage;
