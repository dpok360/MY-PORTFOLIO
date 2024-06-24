import styled from "styled-components";
import Footer from "./Footer";
import ProjectSection from "./ProjectSection";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;
const Content = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 32px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 24px 64px 20px;
  position: relative;
  width: 100%;
`;

const P = styled(motion.p)`
  font-family: "roboto", "system-ui";
  font-size: 35px;
  font-weight: 800;

  padding: 16px;
  background-image: linear-gradient(
    285deg,
    rgb(59, 61, 65) 0%,
    rgba(61, 63, 67, 1) 1.88487%,
    rgba(61, 63, 67, 1) 1.88487%,
    hsl(220, 4%, 52%) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: start;
  hyphens: none;
`;
const P2 = styled(motion.p)`
  font-size: 20px;
  padding: 10px;
  color: transparent;
  font-family: "roboto", "system-ui";
  font-weight: 1000;
  background-image: linear-gradient(
    285deg,
    rgb(59, 61, 65) 0%,
    rgba(61, 63, 67, 1) 1.88487%,
    rgba(61, 63, 67, 1) 1.88487%,
    hsl(220, 4%, 52%) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  text-align: start;
  hyphens: none;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: var(--color-grey-200);
  border-radius: 5px;
  width: 90%;
  margin: 20px auto;
`;

const Div = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 0 0px;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 6px;
  height: 37px;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 1px;
`;
const Header = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
  padding: 40px 64px 0;
  position: relative;
  width: 100%;
`;

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)", //
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.4,
      duration: 0.5,
    },
  }),
};

function Home() {
  return (
    <>
      <Container variants={lineVariants} initial="hidden" animate="visible">
        <Header>
          <Div>
            <span>
              <P2 custom={1} variants={lineVariants}>
                Hello, Namaste!
              </P2>
            </span>
          </Div>
        </Header>

        <Content>
          <P custom={2} variants={lineVariants}>
            I'm Deepak Suryavanshi, currently exploring frontend web development
            after gaining experience in the telecom sector. I'm passionate about
            creating engaging user interfaces and improving digital experiences.
            Welcome to my portfolio, where I showcase my projects and learning
            journey!
          </P>
        </Content>
        <Hr />
        <ProjectSection />

        <Footer />
      </Container>
    </>
  );
}

export default Home;
