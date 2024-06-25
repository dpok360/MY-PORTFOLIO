import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import SkillsIcons from "./SkillsIcons";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  gap: 50px;
  height: min-content;
  max-width: 960px;
  overflow: visible;
  padding: 40px 0px 0px;
  position: relative;
  width: 900px;
  margin: auto;
  padding: 30px 0;
  scroll-behavior: smooth;
`;

const ContentFrame = styled.div`
  place-content: center flex-start;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 32px;
  height: min-content;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 860px;
`;

const Frame = styled.div`
  place-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  background-color: rgb(250, 250, 250);
  border-radius: 6px;
  display: flex;
  flex: 1 0 0px;
  flex-flow: column;
  gap: 6px;
  height: auto;
  overflow: visible;
  padding: 24px 32px;
  position: relative;
  width: 1px;
`;
const P = styled(motion.p)`
  font-family: "Roboto", "sytem-ui";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 21px;
  color: #3b3d41;
  text-decoration: none;
  text-transform: none;

  margin-bottom: 20px;
  hyphens: none;
`;
const H1 = styled(motion.h1)`
  font-family: "Roboto";
  font-size: 60px;
  letter-spacing: -0.02em;
  line-height: 80px;
  z-index: 1;
`;
const H2 = styled(motion.h2)`
  font-family: "Sequel Sans Medium Disp", "Sequel Sans Medium Disp Placeholder",
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  letter-spacing: -0.01em;
  line-height: 42px;
  color: #3b3d41;
`;

const H3 = styled(motion.h3)`
  font-family: "Robot", "sans-serif";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 36px;
  color: #3b3d41;
`;

const Hr = styled.hr`
  border: 0;
  height: 2px;
  background: var(--color-grey-200);
  border-radius: 5px;
  width: 80%;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Img = styled(motion.img)`
  border-radius: 8px;
  border-image: fill 0 linear-gradient(white, blue);
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
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
      delay: i * 0.2,
      duration: 0.3,
    },
  }),
};

function About() {
  return (
    <>
      <Container initial="hidden" animate="visible">
        <ContentFrame>
          <Frame>
            <H1 custom={1} variants={lineVariants}>
              Deepak Suryavanshi
            </H1>
            <H2 custom={1} variants={lineVariants}>
              Frontend Web Developer
            </H2>
          </Frame>
          <Frame>
            <ProfileImage custom={1} variants={lineVariants} />
          </Frame>
        </ContentFrame>
        <Hr />

        <ContentFrame>
          <Frame>
            <H2 custom={2} variants={lineVariants}>
              INFO
            </H2>
            <P custom={3} variants={lineVariants}>
              I am an aspiring front-end web developer with a strong passion for
              learning and creating. Although I am relatively new to the field
              of web development, I have dedicated myself to mastering the
              necessary skills through self-study. My journey into web
              development began with a curiosity to understand how websites work
              and has since grown into a full-fledged commitment to becoming a
              proficient developer.
            </P>

            <P custom={3} variants={lineVariants}>
              My professional journey began in the telecom sector, where I
              developed a strong foundation in technical problem-solving and
              collaborative teamwork. These experiences honed my analytical
              skills and provided me with a unique perspective on technology and
              its applications. Motivated by a desire to broaden my expertise
              and explore new challenges, I transitioned into web development.
              Through rigorous self-study, I have dedicated myself to mastering
              front-end web development. This path has allowed me to combine my
              technical background with a newfound passion for creating dynamic
              and user-friendly web applications.
            </P>
          </Frame>
        </ContentFrame>
        <Hr />

        <ContentFrame>
          <Frame>
            <H2 custom={4} variants={lineVariants}>
              SKILLS
            </H2>
            <P custom={4} variants={lineVariants}>
              Throughout my learning journey in web development, I have immersed
              myself in a wide range of front-end technologies and tools. This
              has allowed me to gain both theoretical knowledge and practical,
              hands-on experience in creating dynamic and responsive web
              applications. Here are the skills I have developed:
            </P>
            <H2 custom={5} variants={lineVariants}>
              Programming Languages:
            </H2>
            <P custom={5} variants={lineVariants}>
              JavaScript,HTML, CSS, Sass
            </P>
            <H2 custom={5} variants={lineVariants}>
              Libraries & Frameworks:
            </H2>
            <P custom={5} variants={lineVariants}>
              React,Redux,Tailwind CSS, Styled Components,React
              Router,Tanstack/React query,Recharts,Framer Motion
            </P>
            <H2 custom={5} variants={lineVariants}>
              Tools & Platforms:
            </H2>
            <P custom={5} variants={lineVariants}>
              Git, GitHub, Netlify, Vercel, Supabase, Webpack,Vite
            </P>
          </Frame>
        </ContentFrame>
        <SkillsIcons />
        <Hr />

        <ContentFrame>
          <Frame>
            <H2 custom={6} variants={lineVariants}>
              EDUCATION
            </H2>
            <H3 custom={6} variants={lineVariants}>
              Pokhara University, Nepal
            </H3>
            <H2 custom={6} variants={lineVariants}>
              School of Engineering
            </H2>
            <P custom={6} variants={lineVariants}>
              BE in Electronincs & Communiaction
            </P>
          </Frame>
        </ContentFrame>
        <Hr />
        <ContentFrame>
          <Frame>
            <H2 custom={7} variants={lineVariants}>
              THINGS I LOVE TO DO
            </H2>
            <H3 custom={7} variants={lineVariants}>
              Exploring New Places, Gaming and Embracing Technology
            </H3>
            <br />
            <P custom={7} variants={lineVariants}>
              Exploring new destinations and immersing myself in diverse
              cultures through travel provides me with a profound sense of
              enrichment and discovery. Similarly, engaging in immersive gaming
              not only entertains me but also cultivates my leadership skills,
              teamwork abilities, and strategic thinking. Gaming challenges me
              to work collaboratively towards common goals, assume leadership
              roles, and navigate complex scenarios, fostering personal growth
              and expanding my problem-solving capabilities in dynamic virtual
              environments. Additionally, staying updated on innovations in
              science and technology through online resources broadens my
              understanding of emerging trends and breakthroughs, inspiring
              curiosity and creativity in exploring future possibilities. These
              activities collectively contribute to my development by enhancing
              my adaptability and broadening my perspectives in various
              contexts.
            </P>
          </Frame>
          <Frame>
            <Img
              src="https://github.com/dpok360/IMAGES/blob/main/1677180545520%20(1).png?raw=true"
              alt="tilicho lake at manang nepal"
              loading="lazy"
              custom={8}
              variants={lineVariants}
            />
            <P custom={8} variants={lineVariants}>
              Somewhere along the trek to Tilicho Lake
            </P>
            <Img
              src="https://github.com/dpok360/IMAGES/blob/main/lakeTilicho%20(1).jpg?raw=true"
              alt="tilicho lake at manang nepal"
              loading="lazy"
              custom={9}
              variants={lineVariants}
            />
            <P custom={9} variants={lineVariants}>
              Tilicho Lake, Nepal - 4,919m
            </P>
          </Frame>
        </ContentFrame>
        <Bottom>
          <p>*******</p>
        </Bottom>
      </Container>
    </>
  );
}

export default About;
