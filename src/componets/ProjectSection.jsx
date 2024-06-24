import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.p`
  background: var(--color-grey-400);
  background-clip: text;
  color: transparent;
  font-size: 15px;
  font-weight: 500;
  line-height: 4rem;
`;

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 10px 10px 10px 35px;
`;
const TitleContain = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  border: none;
`;

const MainContainer = styled(motion.div)`
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 0 64px 64px;
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

const BoxContainer = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 1px;
`;

const BoxColumn = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 1px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled(Link)`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 60px;
  position: relative;
  width: 100%;
  transition: box-shadow 0.3s ease;
  border-radius: 6px;
  background: rgb(244, 245, 245);

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(42, 40, 40, 0.2);
  }
`;
const ImageDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Img = styled(motion.img)`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
  margin: 10px;
  border-radius: 5px;
`;

const TitleContainer = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const TitleFrame = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 24px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
`;

const TitleBox = styled.div`
  flex: none;
  height: auto;
  position: relative;
  user-select: none;
  white-space: pre-wrap;
  width: 100%;
  margin: 10px 30px 30px 0;
`;

const H3 = styled(motion.h3)`
  font-weight: 400;
  color: var(--color-grey-400);
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 3rem;
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
      duration: 0.7,
    },
  }),
};
function ProjectSection() {
  return (
    <>
      <Container>
        <TitleContain>
          <Title>PROJECTS </Title>
        </TitleContain>
      </Container>

      <MainContainer initial="hidden" animate="visible">
        <BoxContainer>
          <BoxColumn>
            <ContentBox>
              <Content to="/wildoasis">
                <ImageDiv custom={1} variants={lineVariants}>
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/WILDOASIS.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />

                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/wildoasis2.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                </ImageDiv>
              </Content>

              <TitleContainer>
                <TitleFrame>
                  <TitleBox>
                    <H3 custom={1} variants={lineVariants}>
                      The Wild Oasis
                    </H3>
                  </TitleBox>
                </TitleFrame>
              </TitleContainer>
            </ContentBox>

            <ContentBox>
              <Content to="/reactquiz">
                <ImageDiv custom={1} variants={lineVariants}>
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/react%20quiz%203.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                </ImageDiv>
              </Content>
              <TitleContainer>
                <TitleFrame>
                  <TitleBox>
                    <H3 custom={1} variants={lineVariants}>
                      The React Quiz
                    </H3>
                  </TitleBox>
                </TitleFrame>
              </TitleContainer>
            </ContentBox>
          </BoxColumn>
        </BoxContainer>

        <BoxContainer>
          <BoxColumn>
            <ContentBox>
              <Content to="/fastpizza">
                <ImageDiv custom={1} variants={lineVariants}>
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/fast%20pizza%20menu.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/fast%20pizza%20order.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                </ImageDiv>
              </Content>
            </ContentBox>

            <TitleContainer>
              <TitleFrame>
                <TitleBox>
                  <H3 custom={1} variants={lineVariants}>
                    The Fast Pizza co.
                  </H3>
                </TitleBox>
              </TitleFrame>
            </TitleContainer>

            <ContentBox>
              <Content to="/eatnsplit">
                <ImageDiv custom={1} variants={lineVariants}>
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/split.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                </ImageDiv>
              </Content>

              <TitleContainer>
                <TitleFrame>
                  <TitleBox>
                    <H3 custom={1} variants={lineVariants}>
                      Eat n Split
                    </H3>
                  </TitleBox>
                </TitleFrame>
              </TitleContainer>
            </ContentBox>
          </BoxColumn>
        </BoxContainer>

        <BoxContainer>
          <BoxColumn>
            <ContentBox>
              <Content to="/worldwise">
                <ImageDiv custom={1} variants={lineVariants}>
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/worldwise%20login.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/worldwise2.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                </ImageDiv>
              </Content>

              <TitleContainer>
                <TitleFrame>
                  <TitleBox>
                    <H3 custom={1} variants={lineVariants}>
                      The World Wise
                    </H3>
                  </TitleBox>
                </TitleFrame>
              </TitleContainer>
            </ContentBox>

            <ContentBox>
              <Content to="/faraway">
                <ImageDiv>
                  <Img
                    src="https://github.com/dpok360/IMAGES/blob/main/travellist.png?raw=true"
                    alt="wildoasis project image"
                    decoding="async"
                    loading="lazy"
                    custom={1}
                    variants={lineVariants}
                  />
                </ImageDiv>
              </Content>

              <TitleContainer>
                <TitleFrame>
                  <TitleBox>
                    <H3 custom={1} variants={lineVariants}>
                      Far Away
                    </H3>
                  </TitleBox>
                </TitleFrame>
              </TitleContainer>
            </ContentBox>
          </BoxColumn>
        </BoxContainer>
      </MainContainer>
    </>
  );
}

export default ProjectSection;
