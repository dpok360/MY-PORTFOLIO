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
  font-style: normal;
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
const P2 = styled(P)`
  font-size: 17px;
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
function WorldWise() {
  return (
    <>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/worldwise%20Login%20page.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>
      <Pdiv>
        <P>Login Page</P>
      </Pdiv>

      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/worldwise%20login.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>
      <Pdiv>
        <P>Home Page</P>
      </Pdiv>

      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/worldwise2.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>
      <Pdiv>
        <P>Cities/Countries/Navigation Page</P>
      </Pdiv>

      <Container>
        <Box>
          <Title>
            <H>The WorldWise</H>
            <H3>Travel Tracking React App</H3>
          </Title>
          <RepoButton href={"https://github.com/dpok360/the-worldwise-app"}>
            <p>Github repo</p>
          </RepoButton>
          <Hr />
          <div>
            <H4>Features and Implementation:</H4>
            <ul>
              <Li>
                <strong> Dynamic Page Navigation:</strong>Implemented using
                React Router, WorldWise offers a seamless single-page
                application (SPA) experience with URL updates as users navigate
                between different sections like city lists and interactive maps.
              </Li>
              <Li>
                <strong>City and Country Lists:</strong> Dynamically retrieves
                and displays lists of visited cities and corresponding countries
                based on user input, creating a personalized travel log for
                users.
              </Li>
              <Li>
                <strong>Interactive Maps with Geolocation:</strong> Integrated
                Leaflet library to visualize travel routes and visited cities on
                an interactive map. Implemented geolocation features to show the
                user's current location and dynamically update the map as the
                user travels.
              </Li>
              <Li>
                <strong>City Details: </strong>Clicking on city markers reveals
                detailed information including the city name, visit date,
                personal notes, and links to explore more on Wikipedia,
                enhancing user engagement with each travel memory.
              </Li>
              <Li>
                <strong>User-Friendly UI:</strong> Designed with a focus on
                usability, WorldWise features an intuitive interface that
                simplifies interaction with its various features, ensuring a
                seamless user experience.
              </Li>
              <Li>
                <strong>User Login Page: </strong>Implemented a simple user
                login interface using React components, allowing users to enter
                a username and password. This feature is for demonstration
                purposes only and does not include backend authentication or
                user management.
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Technologies Used:</H4>
            <ul>
              <Li>
                <strong>React: </strong>JavaScript library for building user
                interfaces, facilitating component-based development and
                efficient state management.
              </Li>
              <Li>
                <strong>React Router:</strong> Declarative routing for managing
                navigation within the SPA, ensuring smooth transitions between
                different sections of the application.
              </Li>
              <Li>
                <strong>Leaflet:</strong> Open-source JavaScript library for
                interactive maps, utilized for geographical data visualization
                and enhancing the map viewing experience.
              </Li>
              <Li>
                <strong>Geolocation API:</strong> Integrated browser geolocation
                API to retrieve the user's current location on the map,
                providing real-time location updates and enhancing the
                interactive map experience.
              </Li>
              <Li>
                <strong>Context API and useReducer:</strong> Utilized React's
                Context API and useReducer hook for managing application state
                and data flow, ensuring efficient and scalable state management.
              </Li>
              <Li>
                <strong>CSS Modules:</strong> Utilized CSS modules for scoped
                styling within React components, ensuring encapsulation and
                preventing style leakage across different parts of the
                application.
              </Li>
              <Li>
                <strong>Vite:</strong> Fast build tool for modern JavaScript
                development, optimizing the application's development workflow
                and enhancing overall performance.
              </Li>
              <Li>
                <strong>ESLint:</strong> JavaScript linter for maintaining code
                quality and enforcing best practices, ensuring clean and
                error-free code throughout the development process.
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Learning Experience:</H4>
            <P>
              WorldWise provided hands-on experience in React development,
              frontend architecture, and user interface design. It deepened my
              understanding of state management, dynamic content rendering, and
              integrating third-party libraries like Leaflet for enhanced map
              functionalities. Implementing CSS modules enhanced my skills in
              scoped styling, improving code maintainability and reducing style
              conflicts.
            </P>
          </div>
          <Hr />
          <div>
            <H4>Conclusion:</H4>
            <P>
              Through "The Wild Oasis," I demonstrated my ability to build
              scalable web applications, leveraging modern frontend technologies
              like React and integrating seamlessly with backend services such
              as Supabase. This project reinforced my skills in full-stack
              development and prepared me for future challenges in the field.
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

export default WorldWise;
