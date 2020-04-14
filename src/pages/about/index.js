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
            <h3 className="AboutMePage__Q">Sources I use to learn</h3>
            <p>
              I did almost all learning on my own, without any courses or
              bootcamps. I just told myself not to be afraid and try. At first I
              used online courses offering both theory and practice. Then I
              delved deeper into a couple of Javascript and PHP books. For CSS,
              it was more practice and Stack Overflow Q&A.
            </p>
            <p>
              After gaining some experience I switched to reading various
              articles in blogs, on Medium, CSS Tricks, Dev.to and others about
              best practices of what I already knew.
            </p>
            <p>
              Currently I&apos;m subscribed to lots of newsletters which I read
              a couple of times a week. I also understood the value of
              documentation, which I now study for each new technology I pick.
              In addition, I have a separate YouTube account, only for tech
              videos, which I watch regularly.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">How I learn code</h3>
            <p>
              Can&apos;t tell you anything new here, since it&apos;s all about
              practice in the end. I do my personal projects and in every new
              project I try to learn and practise some new technologies.
            </p>
            <Button inverted href="/works">
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
              Courses, articles, docs, newsletters, thematic videos and
              exploring other people&apos;s code are also part of my learning
              strategy.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Why I focus only on JS</h3>
            <p>
              I believe a good engineer can switch between languages without
              much difficulty, but since it&apos;s impossible to focus on many
              things at once I chose for now to thoroughly learn JS and its rich
              ecosystem.
            </p>
            <p>
              Besides JS and React, I also learned PHP and databases, how to
              configure servers and work with Linux, how to use some AWS
              services and many other smaller things and concepts. I am not
              ready to say I am confident with them but if needed, I can quickly
              pick them up and bring to the desired level.
            </p>
            <p>
              So my focus is on Javascript, React and Node, but other
              technologies are not excluded. It&apos;s just about priorities.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Dealing with difficulties</h3>
            <p>
              Sometimes it gets frustrating when you keep banging your head
              against a problem and still cannot get things to work properly.
              But I treat this normally and think the best way to learn is to
              relax and keep making mistakes. The main thing is to not repeat
              them. I have learned to ask right questions and not hesitate to
              ask for help.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">What is quality code for me</h3>
            <p>
              Developers know there is no ideal code. But let us try to describe
              it. This is code that covers all or majority of use cases, code
              that is understandable to any developer. It is testable and
              desirably with well-written types. It takes into account app
              architecture.
            </p>
            <p>
              And of course it is stylistically the same, thanks to linters and
              things like Prettier. This is the code I aim for and, in many
              aspects, already write.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Coding vs. business</h3>
            <p>
              I saw developers diving into coding so much that they forgot for
              whom their product is. They forgot about users! Thinking about
              code quality is great but if we trade UX for &lsquo;more
              readable&rsquo; code just because we want, this is bad.
            </p>
            <p>
              I am among those developers who constantly think about the
              business value of the code we write. Tech debt management is
              important but refactoring for the sake of refactoring is a waste
              of client&apos;s money.
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
              It all started with a tourism website for Minsk that I wanted to
              make, but did not have either money or knowledge about how to do
              that. I just wanted Belarus to be more famous in the world.
            </p>
            <p>
              I started googling and stumbled into Joomla and Wordpress, but
              without coding skills that was not customizable enough for my
              idea.
            </p>
            <p>
              Coding seemed something from another planet but I made myself try
              HTML/CSS and Javascript. After getting the gist of frontend I
              dived into PHP and databases, because I was using Wordpress, after
              all! I needed to understand the whole process: from frontend to
              backend and even some deployment.
            </p>
            <p>
              This is how I started doing mini-projects trying the technologies
              I learned. It was so exciting to create things on your own that
              soon I understood that my knowledge could be enough to start
              coding professionally.
            </p>
            <p>
              I did an English version of a website for the news company I
              worked for, the first time I was paid for coding. Then I wrote a
              script that optimizes image sizes for our editors, then made a
              personal website on Wordpress with a custom theme and there it
              goes... I soon found my first programming job.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Preferred work conditions</h3>
            <p>
              In the office, it is vary important for me to have a separate room
              or space for my team. I don&apos;t like classic open spaces (who
              does?)
            </p>
            <p>
              I can tolerate some noise, especially when guys are discussing
              some engineering stuff.
            </p>
            <p>
              On the tech side, it would be cool to have 2 big monitors instead
              of one. A comfortable chair and a powerful dev Linux machine is
              actually all I need.
            </p>
            <p>
              Otherwise, I do not really have any special requirements to a
              workplace. Coffee, shower, all that stuff? Cool to have it, of
              course, but not mission critical :)
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">My weaknesses</h3>
            <p>
              I need to learn to separate time at work and out of work.
              Sometimes when I couldn&apos;t make something work all day, this
              carries into my evening and I finish that day in bad mood.
            </p>
            <p>
              I am also too cautious and instead of failure I prefer to spend
              more time to ensure I will not fail.
            </p>
            <p>
              Sometimes I am too serious and too focused on work not allowing
              myself to relax and do some tea talk with teammates.
            </p>
            <p>
              Finally, I am not firm enough in some communications and if I face
              aggression I cannot respond adequately, which hurts my morale. I
              need to learn to handle this better.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">Team buildings</h3>
            <p>
              Honestly, I do not like them. Being a team player during working
              hours I value my personal time and privacy. Spending time with the
              family is one of the greatest values I have in my life.
            </p>
            <p>
              I appreciate it when companies understand that their employees are
              all different people and not everyone is interested in public
              gatherings. Hope you are among these companies, too!
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
              where it is now, why the quality of life is on the present level
              and what happened to other countries over the same time.
            </p>
            <p>
              Space and universe is another topic I am attracted. We know so
              little about the world we live in! Here also go fiction books,
              especially about time travelling.
            </p>
            <p>
              Recently, I dived a bit into urbanism. It is fascinating how
              people make their cities a much better place! Minsk can borrow a
              lot of ideas from around the globe.
            </p>
          </Card>
        </div>
      </Block>

      <Block id="WorkCareer">
        <h1 className="AboutMePage__Heading">Work & Career</h1>
        <div className="AboutMePage__QA">
          {Date.now() < dayjs('2020-07-15') && (
            <Card flat>
              <h3 className="AboutMePage__Q">
                Why I am leaving my current company
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
            <h3 className="AboutMePage__Q">Domains I am interested in</h3>
            <p>
              I would like to develop web applications in such areas as real
              estate, tourism, media, lifestyle, sport, fintech, education or
              entertainment, but these are just a few areas of interest. My
              choice depends on many other project details as well.
            </p>
          </Card>

          <Card flat>
            <h3 className="AboutMePage__Q">The project of my dream</h3>
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
            <h3 className="AboutMePage__Q">Overall career plans</h3>
            <p>
              In the coming years I&apos;m planning to keep coding and improve
              my skills a lot (both frontend and backend). Among plans are
              certifications for AWS and Node.js. As my dev skills grow I would
              like to build more complex apps, master best practices of
              deployment and web security and try different architectural
              approaches.
            </p>
            <p>
              At the same time I am willing to assume more business-related
              responsibilities like interviewing and mentoring of junior devs,
              take part in pre-sales activities. Further, I see myself in a
              management position (team lead).
            </p>
          </Card>
        </div>
      </Block>
    </div>
  </Layout>
);

export default AboutPage;
