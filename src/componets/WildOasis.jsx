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
  font-family: "Sequel Sans Medium Disp", "Sequel Sans Medium Disp Placeholder",
    sans-serif;
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

function WildOasis() {
  return (
    <>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/WILDOASIS.png?raw=true"
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
            src="https://github.com/dpok360/IMAGES/blob/main/wild%20oasis%20login.png?raw=true"
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
            src="https://github.com/dpok360/IMAGES/blob/main/wildoasisdark.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Pdiv>
        <P>Dark Mode</P>
      </Pdiv>

      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/wildoasis2.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Pdiv>
        <P>Booking Page</P>
      </Pdiv>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/wildoasis3.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>
      <Pdiv>
        <P>Cabin Page</P>
      </Pdiv>

      <Container>
        <Box>
          <Title>
            <H>The Wild Oasis</H>
            <H3>Full Stack React App</H3>
          </Title>
          <RepoButton href={"https://github.com/dpok360/the-wild-oasis"}>
            <p>Github repo</p>
          </RepoButton>
          <Hr />
          <div>
            <P>
              I developed "The Wild Oasis" as a comprehensive React web
              application for hotel management, integrating Supabase as the
              backend solution. This project allowed me to explore frontend
              development while leveraging Supabase for secure authentication,
              real-time data storage, and other backend functionalities.
            </P>
          </div>
          <Hr />

          <div>
            <H4>Features and Implementation:</H4>
            <ul>
              <Li>
                <strong>Authentication and User Management:</strong> Implemented
                secure user authentication and managed hotel staff accounts with
                Supabase, ensuring robust access controls.
              </Li>
              <Li>
                <strong>Sales Statistics Visualization:</strong> Utilized
                Recharts for interactive charting to visualize sales statistics,
                providing insights into revenue trends and occupancy rates.
              </Li>
              <Li>
                <strong>Cabin Management:</strong> Developed functionalities for
                managing cabin availability, including CRUD operations directly
                linked to Supabase for real-time updates.
              </Li>
              <Li>
                <strong>Booking Management:</strong> Simplified the reservation
                process with features for check-ins, check-outs, and booking
                management, leveraging Supabase for data persistence.
              </Li>
              <Li>
                <strong>Customization Options:</strong> Enhanced user experience
                with a dark mode theme using styled-components.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Technologies Used:</H4>
            <ul>
              <Li>
                <strong>React: </strong>JavaScript library for UI development.
              </Li>

              <Li>
                <strong>Supabase:</strong> Cloud database service for real-time
                and secure data storage.
              </Li>

              <Li>
                <strong>tanstack/react-query:</strong> Data-fetching and state
                management library for React.
              </Li>

              <Li>
                <strong> date-fns:</strong> JavaScript date utility library for
                parsing, formatting, and manipulating dates.
              </Li>

              <Li>
                <strong>react-router-dom:</strong>Library for routing and
                navigation in React apps.
              </Li>

              <Li>
                <strong>recharts:</strong>Composable charting library for React.
              </Li>

              <Li>
                <strong>styled-components:</strong>CSS-in-JS library for styling
                React components.
              </Li>

              <Li>
                <strong>react-hot-toast:</strong>Customizable toast notification
                library for React.
              </Li>

              <Li>
                <strong>react-icons:</strong>Collection of customizable icons
                for React apps.
              </Li>

              <Li>
                <strong>react-hook-form:</strong>Library for form state
                management and validation in React.
              </Li>

              <Li>
                <strong>Vercel:</strong> Deployment platform for hosting React
                applications.
              </Li>
            </ul>
          </div>
          <Hr />

          <H4>Future Improvements:</H4>
          <ul>
            <Li>
              Enhance booking management with calendar integration and
              availability alerts.
            </Li>

            <Li>
              Implement advanced analytics for sales and occupancy trends.
            </Li>

            <Li>
              Expand customization features with more theme options and
              notification preferences.
            </Li>
          </ul>
          <Hr />
          <div>
            <H4>Learning Experience:</H4>
            <P>
              Throughout the development of The Wild Oasis, I extensively
              utilized React Hooks for state management, enhancing
              responsiveness and user interaction. Implementing react-query
              facilitated seamless data fetching and caching, optimizing
              performance and enabling real-time updates. Styled-components
              empowered modular and scoped styling, ensuring maintainability
              across components, while react-router-dom streamlined navigation
              within the application. Integrating recharts enhanced data
              visualization capabilities, providing insights into sales
              statistics and occupancy trends. Additionally, leveraging
              react-hook-form for form validation and react-hot-toast for
              interactive notifications enriched the user experience. These
              experiences have deepened my proficiency in utilizing diverse
              React libraries effectively, preparing me to tackle complex
              challenges in modern web development.
            </P>
          </div>
          <Hr />
          <div>
            <H4>Conclusion:</H4>
            <P>
              Developing The Wild Oasis has been instrumental in advancing my
              skills in React frontend development and backend integration using
              Supabase. This project not only deepened my understanding of UI/UX
              design and state management with React Hooks but also equipped me
              with the ability to implement secure data handling practices
              through Supabase. Moving forward, I am excited to apply these
              skills to create more intuitive and efficient web applications,
              aiming to contribute impactful solutions to future projects in web
              development.
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

export default WildOasis;
