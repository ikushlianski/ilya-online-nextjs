import React from 'react';
import dayjs from 'dayjs';

import { Block, Button, Card } from '../../ui-kit';
import { Layout } from '../../components';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

import './AboutPage.scss';

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
                Due to the February 2022 instability my current Ukrainian
                company might impose some restrictions on Belarusians, namely
                they might require relocation, which is not an option for me due
                to family reasons. That’s why I’m considering backup options.
                Otherwise, I’d not change a thing, because I enjoy working for
                the current company.
              </p>
            </Card>
          )}

          <Card flat>
            <h3 className="AboutMePage__Q">Domains I am interested in</h3>
            <p>
              I would like to develop web apps in such domains as real estate,
              e-commerce, tourism, media, lifestyle, sport, fintech, education
              or entertainment, but these are just a few areas of interest. My
              choice depends on many other project details as well.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">The project of my dream</h3>
            <p>
              Team: ambitious devs who produce quality software, value testing
              (not for the sake of test coverage) and do real CI/CD.
            </p>
            <p>
              Product: a full-stack web application, where you can do both
              frontend and backend development. Ideally a project from scratch.
            </p>
            <p>
              Processes: Scrum or alike. No minute-by-minute time tracking (do
              you really trust your developers?). Estimations in story points
              not mapped to hours or days. I have seen a number of projects
              failing to meet the timelines and they all made the same mistake:
              estimate software development work in hours/days without properly
              breaking it up into clear subtasks
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Overall career plans</h3>
            <p>
              In the coming years I&apos;m planning to keep coding and keep
              improving my hard skills (both frontend and backend). Among plans
              is diving into other front-end frameworks like Angular and Vue as
              well as developing software architecture skills. I am passionate
              about new frameworks like Next.js and Remix that make frontend and
              backend much closer and urge you to be on both sides of web
              development.
            </p>
            <p>
              I am gradually assuming more leadership responsibilities like
              leading other developers, interviewing and mentoring.
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
              For tech overviews: email listings like Node Weekly, subscribing
              to dev blogs, YouTube channels and podcasts.
            </p>
            <p>For learning new things: documentation, specs and books.</p>
            <p>
              For quick bites, Stack Overflow is the standard (I do not own a
              Copy-Past button though).
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">How I learn code</h3>
            <p>
              It is all about practice in the end. I start with guided tours of
              the new technology and try implementing some tiny project as I go
              to get more comfortable with what I have just learned. However, I
              do understand that it is web fundamentals, not new shiny
              frameworks, that should be the foundation of my programming
              knowledge. Knowing these fundamentals helps you de-mystify the new
              stuff you learn.
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
            <h3 className="AboutMePage__Q">Why I focus only on Javascript</h3>
            <p>
              I believe a good engineer can switch between languages without
              much difficulty, but I believe it&apos;s just impossible to be
              good at many languages at once. I bet on good knowledge of one
              thing rather than boasting about knowing a dozen languages I
              hardly worked with.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Dealing with difficulties</h3>
            <p>
              Banging your head against a problem is frustrating. But as I
              gained more experience this was no more a big roadblock. Now I
              teach my mentees not to give up, read what the actual errors say,
              not be scared of red color, and google things properly.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Using AI at work</h3>
            <p>
              I am not sure that stuff like Github co-pilot is really helpful if
              you weigh all pros and cons. I think using some kind of AI at work
              for simple stuff like very basic unit tests saves you some time,
              but we should not fully rely on AI for true coding. So I would say
              it is good for boilerplate tasks but nothing beyond that.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">What is quality code for me</h3>
            <p>
              Everybody thinks they write clean code, so the notion of ideal
              clean code is hard to determine. Yet I believe quality means
              understandable, easily testable, typed and maintainable code that
              can be adapted to changes in business requirements and has
              forward-looking architecture. With such code, time to add new
              features does not grow exponentially.
            </p>
            <p>
              Linters, pre-commit hooks, Github Actions and similar checks are
              of great help too.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Coding vs. business</h3>
            <p>
              I belong to developers for whom coding is inextricably linked with
              the business side of things. I understand that our products do not
              exist in vacuum, there are users out there who have their view on
              our product and there are businesses willing return on their
              money!
            </p>
            <p>
              I strive to achieve a reasonable balance between code quality and
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
              It all started with a Minsk tourism website I wanted to create
              back in 2015, but I did not have either money or knowledge
              required for that. I just wanted Belarus to be more famous in the
              world and get rid of stereotypes about us being &lsquo;rural
              people without history.&rsquo;
            </p>
            <p>
              I started googling and stumbled into Drupal and Wordpress, but
              without coding skills those were not customizable enough for my
              idea.
            </p>
            <p>
              Despite some self-doubts I decided to give HTML/CSS and Javascript
              a try. I liked the power it gave me over the logic and styling and
              then dived into PHP and databases to learn what is going on on the
              backend. Running a Wordpress website I needed to understand the
              whole process, from frontend to backend and even some deployment.
              This is what led me to be a full-stack dev.
            </p>
            <p>
              I started doing other mini-projects trying the technologies I
              learned. I made an English version of a website for the news
              company I worked for, the first time I was paid for coding. Then
              came some freelancing and there it goes... Very soon I landed my
              first programming job and almost jumped over the junior position
              as I had almost enough knowledge to be a mid-level dev.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Preferred work conditions</h3>
            <p>
              COVID-19 changed everything in our life. Now I do not consider any
              office jobs, even after the pandemic seems to have gone away.
            </p>
            <p>
              I prefer MacOS over Ubuntu or Windows for its developer
              friendliness and the unique eco-system.
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
              myself included. However, I have successfully dealt with this in
              recent years as I was exposed to lots of calls with clients.
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
              managers always noted the friendliness and good atmosphere that I
              create in each team.
            </p>
            <p>
              I never forget what I promised and always deliver whatever it
              takes. I also willingly help my teammates if they are stuck.
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
              Good LoFi music to relax is the best remedy after a hard working
              day. I am fond of fiction books, especially about time travelling.
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
