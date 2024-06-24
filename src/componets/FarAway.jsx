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

function FarAway() {
  return (
    <>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/travellist.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Container>
        <Box>
          <Title>
            <H>Far Away</H>
            <H3>React App</H3>
          </Title>
          <RepoButton href={"https://github.com/dpok360/Far-Away"}>
            <p>Github repo</p>
          </RepoButton>
          <Hr />
          <div>
            <P>
              The Far Away App is a React-based application designed to help
              users manage their travel packing lists efficiently. It allows
              users to add, delete, and toggle the status of items, as well as
              clear the entire list with ease. This app showcases the use of
              React hooks, specifically useState, for state management and
              demonstrates the integration of various components to create a
              cohesive user experience.
            </P>
          </div>
          <Hr />
          <div>
            <H4>Features:</H4>
            <ul>
              <Li>
                <strong>Add Items: </strong> Users can add new items to their
                packing list through a simple form interface. Each item can
                include a description and a packed status.
              </Li>
              <Li>
                <strong>Delete Items:</strong> Items can be removed individually
                from the list
              </Li>
              <Li>
                <strong>Toggle Item Status: Users</strong> Users can mark items
                as packed or unpacked, which helps in tracking packing progress.
              </Li>
              <Li>
                <strong>Clear List: </strong>With a confirmation prompt, users
                can clear the entire packing list, allowing for a fresh start.
              </Li>
              <Li>
                <strong>Statistics: </strong>The app provides real-time
                statistics about the items, such as the total number of items
                and the number of packed and unpacked items.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Technologies Used:</H4>
            <ul>
              <Li>
                <strong>React: </strong> The primary library used for building
                the user interface. React enables the creation of reusable
                components and efficient state management through hooks like
                useState.
              </Li>
              <Li>
                <strong>JavaScript (ES6+): </strong> The programming language
                used to write the logic for the application. Modern JavaScript
                features such as arrow functions, destructuring, and template
                literals are utilized to enhance code readability and
                functionality.
              </Li>
              <Li>
                <strong>CSS: </strong>Cascading Style Sheets are used for
                styling the application. Custom styles are defined in an
                index.css file to ensure the application has a consistent and
                appealing look and feel.
              </Li>
              <Li>
                <strong>HTML: </strong> While JSX (JavaScript XML) is primarily
                used within React components to define the structure, it
                ultimately compiles down to HTML. This ensures the application's
                UI is rendered correctly in the browser.
              </Li>
              <Li>
                <strong>Webpack: </strong> A module bundler used to compile
                JavaScript modules. Webpack is commonly used in React
                applications to bundle assets, ensuring efficient loading and
                performance.
              </Li>
              <Li>
                <strong>Babel: </strong>A JavaScript compiler that transforms
                modern JavaScript (ES6+) into a version compatible with older
                browsers. This ensures the application runs smoothly across
                different environments.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Tools and Libraries:</H4>
            <ul>
              <Li>
                <strong>Create React App:</strong> A command-line tool used to
                set up a new React project with a standard structure and
                configuration. It simplifies the setup process and includes a
                development server, build scripts, and a testing framework.
              </Li>
              <Li>
                <strong>NPM (Node Package Manager): </strong> Used for managing
                project dependencies. NPM provides access to a vast ecosystem of
                libraries and tools that enhance the development process.
              </Li>
              <Li>
                <strong>ESLint: </strong> A static code analysis tool used to
                identify and fix problems in JavaScript code. It helps maintain
                code quality and consistency.
              </Li>
              <Li>
                <strong>Prettier: </strong> A code formatter that enforces a
                consistent style across the codebase. It improves readability
                and reduces the likelihood of syntax errors.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Project Structure:</H4>
            <ul>
              <Li>
                <strong>components:</strong> Contains individual component files
                like Logo.js, Form.js, PackagingList.js, and Stats.js.
              </Li>
              <Li>
                <strong>index.css:</strong> The main CSS file for styling the
                application.
              </Li>
              <Li>
                <strong>App.js:</strong> The root component that integrates all
                other components and manages the state.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Learning Experience and Conclusion:</H4>
            <P>
              Developing the Travel List App was an enriching experience that
              significantly enhanced my skills in React and modern web
              development. I learned effective state management using the
              useState hook, ensuring immutability and performance. The project
              emphasized the importance of a component-based architecture, with
              reusable components like Logo, Form, PackagingList, and Stats
              promoting a modular and scalable codebase. Handling user
              interactions, such as form submissions and item toggling, taught
              me to create a responsive and interactive UI. Implementing a
              confirmation dialog for clearing the list underscored the
              importance of user experience design. Styling with CSS reinforced
              the need for consistent design, and utilizing tools like Create
              React App, ESLint, and Prettier highlighted the value of best
              practices and code quality. This project deepened my understanding
              of state management, component design, and user experience, making
              it a valuable addition to my portfolio.
            </P>
          </div>
          <Hr />
        </Box>
        <Bottom>
          <p>*******</p>
        </Bottom>
      </Container>
    </>
  );
}

export default FarAway;
