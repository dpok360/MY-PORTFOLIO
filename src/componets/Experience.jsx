import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import styled from "styled-components";
import Resume from "./Resume";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  gap: 6px;
  height: min-content;
  max-width: 960px;
  overflow: visible;
  padding: 40px 0px 0px;
  position: relative;
  width: 1100px;
  margin: auto;
  padding: 35px 0;
  scroll-behavior: smooth;
`;

const ContentFrame = styled(motion.div)`
  place-content: center flex-start;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 10px;
  height: min-content;
  width: min-content;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 800px;
`;

const Frame = styled(motion.div)`
  place-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 6px;
  display: flex;
  flex: 1 0 0px;
  flex-flow: column;
  gap: 6px;
  height: auto;
  overflow: visible;
  padding: 24px 32px;
  position: relative;
  width: min-content;
`;
const P = styled(motion.p)`
  font-family: "Roboto", "sytem-ui";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 21px;
  color: #3b3d41;
  text-decoration: none;
  text-transform: none;
  margin-bottom: 4px;
  hyphens: none;
`;
const Li = styled(motion.li)`
  font-family: "Roboto", "sytem-ui";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 21px;
  color: #3b3d41;
  text-decoration: none;
  text-transform: none;
  margin-bottom: 4px;
  hyphens: none;
  list-style-type: disc;
`;

const H2 = styled(motion.h2)`
  font-family: "robot", "sans-serif";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 25px;
  color: #495777;

  &:hover {
    color: #a1a4aa;
    cursor: pointer;
  }
`;

const H3 = styled(H2)`
  font-size: 15px;
  &:hover {
    color: #a1a4aa;
    cursor: pointer;
  }
`;

const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: var(--color-grey-200);
  border-radius: 5px;
  width: 80%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
`;
const CollapsibleContent = styled(motion.div)`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
`;

const Button = styled(motion.button)`
  font-family: "Roboto", "sytem-ui";
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 21px;
  display: flex;
  align-items: center;
  background: black;
  color: white;
  border: 1px solid black;
  border-radius: 25px;
  padding: 4px 10px;
  width: fit-content;
  font-style: normal;
  text-decoration: none;
  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

function Experience() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  return (
    <>
      <Container initial="hidden" animate="visible">
        <ContentFrame>
          <Frame>
            <H2>Relevant Experience</H2>
          </Frame>
        </ContentFrame>

        <ContentFrame>
          <Frame>
            <P custom={1} variants={lineVariants}>
              June 2024-July 2024
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=24T6MT62024"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={1} variants={lineVariants}>
                Node.js, Express, MongoDB & More: The Complete Bootcamp
                Completed a comprehensive Udemy course on back-end development,
                mastering the modern stack and building a feature-rich
                real-world application.
              </H2>
              <H3 custom={1} variants={lineVariants}>
                Node.js, Express, MongoDB & More: The Complete Bootcamp 2023
                <MdArrowOutward />
              </H3>
            </a>
            <Button
              onClick={() => setExpanded1(!expanded1)}
              custom={1}
              variants={lineVariants}
            >
              {expanded1 ? "Collapse" : "Details"}
            </Button>
            <CollapsibleContent
              isOpen={expanded1}
              initial={{ maxHeight: 0 }}
              animate={{ maxHeight: expanded1 ? "1000px" : "0" }}
              transition={{ duration: 0.2 }}
            >
              <H3></H3>
              <H3>Description:</H3>
              <P>
                Comprehensive training in Node.js, Express, MongoDB, and
                Mongoose, focusing on building robust RESTful APIs and
                server-side rendered websites. Topics include CRUD operations,
                advanced authentication, security measures (encryption,
                sanitization), payment integration with Stripe, email handling,
                file uploads, and deployment to production using Git.
              </P>
              <P>
                <H3>Key Skills Acquired:</H3>

                <Li>
                  Node.js Internals: Gained insights into the event loop,
                  non-blocking code, streams, and module system.
                </Li>
                <Li>
                  Express.js Framework: Built scalable RESTful APIs with
                  filtering, sorting, pagination, and more.
                </Li>
                <Li>
                  MongoDB & Mongoose: Performed CRUD operations, worked with
                  geospatial data, and utilized advanced Mongoose features.
                </Li>
                <Li>
                  Authentication & Authorization: Implemented secure user
                  authentication using JSON Web Tokens (JWT), including advanced
                  password reset mechanisms.
                </Li>
                <Li>
                  Security Best Practices: Applied techniques like encryption,
                  sanitization, and rate limiting.
                </Li>
                <Li>
                  Pug Templating: Used Pug for server-side rendering of dynamic
                  web pages.
                </Li>
                <Li>
                  Stripe Integration: Handled credit card payments using the
                  Stripe API.
                </Li>
                <Li>
                  Email & File Upload: Integrated email sending and file upload
                  functionalities.
                </Li>
                <Li>
                  Deployment: Successfully deployed the application to
                  production.
                </Li>
              </P>
            </CollapsibleContent>
          </Frame>
        </ContentFrame>
        <Hr />

        <ContentFrame>
          <Frame>
            <P custom={2} variants={lineVariants}>
              May-2024
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.udemy.com/course/the-ultimate-react-course/?couponCode=LETSLEARNNOW"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={2} variants={lineVariants}>
                React Course Completion:
              </H2>
              <H3 custom={2} variants={lineVariants}>
                The Ultimate React Course 2024 React, Redux & More
                <MdArrowOutward />
              </H3>
            </a>
            <Button
              onClick={() => setExpanded2(!expanded2)}
              custom={2}
              variants={lineVariants}
            >
              {expanded2 ? "Collapse" : "Details"}
            </Button>
            <CollapsibleContent
              isOpen={expanded2}
              initial={{ maxHeight: 0 }}
              animate={{ maxHeight: expanded2 ? "1000px" : "0" }}
              transition={{ duration: 0.2 }}
            >
              <H3>Platform: Udemy</H3>
              <H3>Completion Date: May 2024</H3>
              <H3>Description:</H3>
              <Li>
                Completed a comprehensive React course on Udemy, focusing on
                building dynamic, scalable, and responsive web applications
                using React.js and relevant libraries.
              </Li>
              <H3>Key Learnings:</H3>
              <Li>
                React Fundamentals: Mastered virtual DOM, component lifecycle
                methods, and JSX syntax.
              </Li>
              <Li>
                State Management: Implemented Redux for centralized state
                management with Redux DevTools.
              </Li>
              <Li>
                Advanced Techniques and Patterns: Utilized React Context API for
                global state management.
              </Li>
              <Li>
                Implemented React Hooks (useState, useEffect, useContext) for
                functional component logic.
              </Li>
              <Li>
                Employed Higher-Order Components (HOCs) and Render Props for
                component reusability and composability.
              </Li>
              <Li>
                Implemented Container/Presentational component pattern and
                Compound Components for better code organization.
              </Li>
              <Li>
                Data Handling: Optimized data fetching and caching with React
                Query, monitored performance with React Query DevTools.
              </Li>
              <Li>
                Routing and Navigation: Implemented declarative routing using
                React Router.
              </Li>
              <Li>
                Styling: Designed responsive interfaces with Tailwind CSS and
                styled components.
              </Li>
              <Li>
                Backend Integration: Integrated Supabase for user authentication
                and database management.
              </Li>
              <Li>
                Deployment: Deployed applications using Vercel for continuous
                deployment.
              </Li>
            </CollapsibleContent>
          </Frame>
        </ContentFrame>

        <Hr />

        <ContentFrame>
          <Frame>
            <P custom={3} variants={lineVariants}>
              March-2024
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.freecodecamp.org/certification/fcc63400ea9-2b5c-4443-929a-59d6e6dfbd40/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={3} variants={lineVariants}>
                Javascript Data structure and Algorithm:
              </H2>

              <H3 custom={3} variants={lineVariants}>
                Comprehensive Learning: Self-taught through online platform
                freeCodeCamp focusing on mastering JavaScript, algorithms, and
                data structures.
              </H3>
              <MdArrowOutward />
            </a>
            <Button
              onClick={() => setExpanded3(!expanded3)}
              custom={3}
              variants={lineVariants}
            >
              {expanded3 ? "Collapse" : "Details"}
            </Button>
            <CollapsibleContent
              isOpen={expanded3}
              initial={{ maxHeight: 0 }}
              animate={{ maxHeight: expanded3 ? "1000px" : "0" }}
              transition={{ duration: 0.2 }}
            >
              <H3>
                Platform: <span>freeCodeCamp</span>
              </H3>
              <H3>Description:</H3>
              <uL>
                <Li>
                  JavaScript Expertise: Developed strong programming skills in
                  JavaScript, including ES6+ features such as arrow functions,
                  template literals, destructuring, and spread/rest operators.
                </Li>

                <Li>
                  Algorithms and Data Structures: Mastered essential algorithms
                  such as sorting (e.g., bubble sort, merge sort) and
                  fundamental data structures like arrays, linked lists, stacks,
                  queues, and hash tables.
                </Li>
              </uL>
            </CollapsibleContent>
          </Frame>
        </ContentFrame>
        <Hr />
        <ContentFrame>
          <Frame>
            <P custom={4} variants={lineVariants}>
              Jan-2024
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.freecodecamp.org/certification/fcc63400ea9-2b5c-4443-929a-59d6e6dfbd40/responsive-web-design"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={4} variants={lineVariants}>
                Responsive web Design:
              </H2>

              <H3 custom={4} variants={lineVariants}>
                Comprehensive Learning: Self-taught through online platform
                freeCodeCamp focusing on mastering HTML, CSS.
                <MdArrowOutward />
              </H3>
            </a>

            <Button
              onClick={() => setExpanded4(!expanded4)}
              custom={4}
              variants={lineVariants}
            >
              {expanded4 ? "Collapse" : "Details"}
            </Button>
            <CollapsibleContent
              isOpen={expanded4}
              initial={{ maxHeight: 0 }}
              animate={{ maxHeight: expanded4 ? "1000px" : "0" }}
              transition={{ duration: 0.2 }}
            >
              <H3>
                Platform: <span>freeCodeCamp</span>
              </H3>
              <H3>Description:</H3>
              <uL>
                <Li>
                  HTML and CSS Mastery: Developed proficiency in creating
                  structured and semantic HTML markup for web pages, coupled
                  with styling techniques using CSS for enhanced presentation
                  and responsiveness.
                </Li>

                <Li>
                  Responsive Web Design: Implemented responsive design
                  principles to ensure optimal viewing and interaction
                  experiences across a wide range of devices and screen sizes.
                </Li>
              </uL>
            </CollapsibleContent>
          </Frame>
        </ContentFrame>
        <Hr />
        <ContentFrame>
          <Frame>
            <H2>Previous Experiences</H2>
          </Frame>
        </ContentFrame>
        <ContentFrame>
          <Frame>
            <P custom={5} variants={lineVariants}>
              April 2022-May 2023
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.instagram.com/newbrothersrestaurantandbar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={5} variants={lineVariants}>
                Manager, Brothers Restaurant and Bar | Tillotama, Rupandehi
                <MdArrowOutward />
              </H2>
            </a>
          </Frame>
        </ContentFrame>

        <ContentFrame>
          <Frame>
            <P custom={6} variants={lineVariants}>
              June-2019 - Feb-2022
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.linkedin.com/company/international-genesis-technology-nepal-private-limited/?originalSubdomain=np"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={6} variants={lineVariants}>
                Site Engineer ,International Genesis Technology Nepal Pvt
                Ltd.(formely GTL Nepal) | Kathmandu, kathmandu
              </H2>
            </a>
          </Frame>
        </ContentFrame>

        <ContentFrame>
          <Frame>
            <P custom={7} variants={lineVariants}>
              April-2018 to July-2018
            </P>
          </Frame>
          <Frame>
            <a
              href="https://www.alignnepal.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <H2 custom={7} variants={lineVariants}>
                Trainee Engineer,ALIGN NEPAL PVT. LTD | Butwal, Rupandehi
                <MdArrowOutward />
              </H2>
            </a>
          </Frame>
        </ContentFrame>
        <Hr />
        <ContentFrame>
          <Frame>
            <Resume />
          </Frame>
        </ContentFrame>

        <Bottom>
          <p>*******</p>
        </Bottom>
      </Container>
    </>
  );
}

export default Experience;
