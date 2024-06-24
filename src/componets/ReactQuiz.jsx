import styled from "styled-components";
import RepoButton from "./RepoButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  overflow: visible;
  padding: 0px;
  position: relative;
  user-select: none;
`;

const Frame = styled.div`
  place-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgb(244, 244, 244),
    rgb(218, 227, 227),
    rgb(190, 198, 207)
  );
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  gap: 100px;
  height: auto;
  overflow: hidden;
  position: relative;
  margin: 40px 200px 25px 200px;
  border-radius: 8px;
`;

const Frame2 = styled.div`
  flex: 0 0 auto;
  overflow: visible;
  position: relative;
  z-index: 1;
  width: auto;
  height: auto;
  padding: 40px 10px;
  border-radius: 8px;
  margin: 25px 120px 25px 120px;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 500px;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
`;

const Title = styled(Container)`
  background: white;
  flex-direction: start;
  justify-content: center;
  align-items: flex-start;
`;

const H = styled.h1`
  font-family: "Roboto", "sytem-ui";
  font-size: 49px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 64px;
  color: #3b3d41;
  text-decoration: none;
  text-transform: none;
`;
const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: var(--color-grey-200);
  border-radius: 5px;
  width: 100%;
  margin: 15px auto;
`;
const H3 = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 30px;
  color: #9499a3;
  text-decoration: none;
  text-transform: none;
  padding-left: 10px;
  margin-bottom: 10px;
`;
const Title2 = styled(H3)`
  color: #838993;
`;

const H4 = styled(H3)`
  padding-left: 0;
`;
const Box = styled.div`
  place-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  gap: 24px;
  height: min-content;
  max-width: 960px;
  overflow: visible;
  padding: 16px 0px 8px 64px;
  position: relative;
  width: 860px;
`;
const P = styled.p`
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
const Li = styled.li`
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
  list-style-type: disc;
`;
const P2 = styled(P)`
  font-size: 17px;
`;
const Div = styled.div`
  place-content: flex-start space-between;
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  height: min-content;
  overflow: visible;
  padding: 0px;
  position: relative;
  width: 100%;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 8px;
`;

const Pdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 206px;
  margin-right: 200px;
`;

function ReactQuiz() {
  return (
    <>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/react%20quiz.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/react%20quiz%203.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/react%20quiz2.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Container>
        <Box>
          <Title>
            <H>The React Quiz App</H>
            <H3>React App</H3>
          </Title>

          <RepoButton href={"https://github.com/dpok360/the-wild-oasis"}>
            <p>Github repo</p>
          </RepoButton>

          <Hr />
          <div>
            <P>
              The Simple Quiz App is a dynamic web application developed in
              React, designed to engage users in a quiz consisting of 15
              multiple-choice questions. Each question offers a set of options,
              and points are awarded instantly upon selecting the correct
              answer. After completing the quiz, the app displays the total
              points earned based on the user's correct answers. It includes a
              timer for each question to add a time-sensitive element, a
              progress tracker, and a high-score display.
            </P>
          </div>

          <Hr />

          <div>
            <H4>Features:</H4>
            <ul>
              <Li>
                <strong>Total Points Display: </strong> Shows the total points
                earned after finishing the quiz.
              </Li>
              <Li>
                <strong>Timer: </strong> Each question is timed, enhancing user
                engagement and challenge.
              </Li>
              <Li>
                <strong>Progress Tracking: </strong> Real-time display of points
                accumulated and progression through the quiz.
              </Li>
            </ul>
          </div>
          <Hr />
          <div>
            <H4>Technologies Used:</H4>
            <ul>
              <Li>
                <strong>Frontend:</strong> React, JavaScript (ES6+), HTML5,
                CSS3.
              </Li>
              <Li>
                <strong>State Management:</strong> React Hooks (useReducer,
                useEffect)
              </Li>
              <Li>
                <strong>Styling: </strong> Custom CSS for basic styling,
                responsive design considerations
              </Li>
              <Li>
                <strong>API: </strong> JSON Server for simulating backend with
                mock quiz data Deployment: Hosted on local development
                environment
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Learning Points:</H4>
            <ul>
              <Li>
                <strong>React Fundamentals: </strong> Strengthened understanding
                of React components, state management, and lifecycle methods.
              </Li>
              <Li>
                <strong>User Interaction: </strong> Implemented interactive
                features such as timers and total points display to enhance user
                engagement.
              </Li>
              <Li>
                <strong>API Integration: </strong> Practiced fetching data from
                a mock API (JSON Server) and handling asynchronous operations in
                React applications.
              </Li>
              <Li>
                <strong>UI/UX Design: </strong> Explored principles of
                responsive design and user interface considerations to optimize
                quiz navigation and presentation.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Conclusion:</H4>
            <P>
              The Simple Quiz App demonstrates my proficiency in frontend
              development using React, providing an engaging and interactive
              quiz experience. By implementing features such as total points
              display upon quiz completion and a timed quiz format, the app
              effectively utilizes React's component architecture and state
              management capabilities. JSON Server served as a practical tool to
              simulate a backend API for storing and retrieving quiz data,
              enhancing the app's functionality.
            </P>
          </div>
        </Box>
        <Bottom>
          <p>*******</p>
        </Bottom>
      </Container>
    </>
  );
}

export default ReactQuiz;
