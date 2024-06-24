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

function FastPizza() {
  return (
    <>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/fast%20pizza.png?raw=true"
            alt="fast react pizza co.  project Home Page image"
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
            src="https://github.com/dpok360/IMAGES/blob/main/fast%20pizza%20menu.png?raw=true"
            alt="fast react pizza co.  project Menu Page image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>
      <Pdiv>
        <P>Menu Page</P>
      </Pdiv>

      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/fast%20pizza%20order.png?raw=true"
            alt="fast react pizza co.  project Order Page image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Pdiv>
        <P>Order Page</P>
      </Pdiv>

      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/fast%20pizza%20billing.png?raw=true"
            alt="fast react pizza co.  project Billing Page image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Pdiv>
        <P>Billing Page</P>
      </Pdiv>

      <Container>
        <Box>
          <Title>
            <H>Fast React Pizza Co.</H>
            <H3>React App</H3>
          </Title>

          <RepoButton href={"https://github.com/dpok360/Fast-Pizza-React-App"}>
            <p>Github repo</p>
          </RepoButton>

          <Hr />

          <div>
            <P>
              A streamlined pizza ordering application designed for simplicity
              and efficiency. Users can browse a dynamic pizza menu fetched from
              an API, add multiple pizzas to their cart, and place orders with
              minimal input required. The application supports optional priority
              marking for faster delivery. Payments are handled on delivery,
              ensuring a straightforward user experience without the need for
              account creation or login.
            </P>
          </div>

          <Hr />

          <div>
            <H4>Features:</H4>
            <ul>
              <Li>
                <strong> Dynamic Pizza Menu:</strong> Fetches and displays pizza
                options from an external API, allowing for seamless updates and
                additions to the menu.
              </Li>
              <Li>
                <strong>User-friendly Cart Management:</strong> Enables users to
                add, remove, and adjust quantities of selected pizzas before
                confirming their order.
              </Li>
              <Li>
                <strong> Order Placement: </strong> Simple form for entering
                basic user details (name, contact number, address) and optional
                selection of priority delivery.
              </Li>
              <Li>
                <strong>Geocoding Integration:</strong> Utilizes browser-based
                geolocation services to allow users to manually input their
                current location for precise delivery handling.
              </Li>
              <Li>
                <strong>Responsive Design:</strong> Designed with Tailwind CSS
                to ensure a responsive and visually consistent user interface
                across various devices and screen sizes.
              </Li>
              <Li>
                <strong>Payment on Delivery:</strong> Facilitates payment upon
                pizza delivery, eliminating the need for online payment
                processing within the application.
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Technologies Used:</H4>
            <ul>
              <Li>
                <strong>React:</strong> Frontend library for building responsive
                and interactive user interfaces.
              </Li>
              <Li>
                <strong>Tailwind CSS:</strong> Utility-first CSS framework for
                rapid UI development and customization.
              </Li>
              <Li>
                <strong>React Router:</strong> Library for declarative routing
                and navigation within the single-page application.
              </Li>
              <Li>
                <strong>Redux:</strong> State management library to efficiently
                manage application state and data flow.
              </Li>
              <Li>
                <strong>Geolocation API:</strong> Integration of browser-based
                geolocation services for precise delivery coordination.
              </Li>
              <Li>
                <strong>Pizza Menu API:</strong> Integration of an external API
                to fetch and display a diverse selection of pizzas.
              </Li>
            </ul>
          </div>

          <Hr />
          <div>
            <H4>Additional Features and Enhancements:</H4>
            <ul>
              <Li>
                <strong> Real-time Order Tracking: </strong> Future enhancement
                potential to integrate order tracking functionality for users to
                monitor the status of their orders.
              </Li>
              <Li>
                <strong>Customizable Pizza Options:</strong> Scope to expand the
                application with features allowing users to customize pizza
                orders with additional toppings or special instructions.
              </Li>
              <Li>
                <strong> User Feedback and Ratings:</strong> Integration of a
                feedback system to gather user reviews and ratings, enhancing
                user engagement and service quality.
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Learning Experience:</H4>

            <P>
              Building the pizza ordering application using React, Tailwind CSS,
              React Router, and Redux was instrumental in deepening my
              understanding of frontend architecture, state management, and
              responsive design principles. Overcoming challenges such as API
              integration and ensuring cross-browser compatibility enhanced my
              problem-solving skills. This experience significantly bolstered my
              technical proficiency in building robust user interfaces, and I am
              eager to apply these skills to future frontend projects.
            </P>
          </div>

          <Hr />
          <div>
            <H4>Conclusion:</H4>
            <P>
              The pizza ordering application exemplifies my expertise in
              frontend development using React, Tailwind CSS, React Router,
              Redux, and API integrations. It showcases my ability to deliver
              robust and user-centric web applications that prioritize
              usability, performance, and integration with external data
              sources.
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

export default FastPizza;
