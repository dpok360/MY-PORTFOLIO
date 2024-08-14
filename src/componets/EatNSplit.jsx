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

function EatNSplit() {
  return (
    <>
      <Frame>
        <Frame2>
          <Img
            src="https://github.com/dpok360/IMAGES/blob/main/split.png?raw=true"
            alt="wildoasis project image"
            decoding="async"
            loading="lazy"
          />
        </Frame2>
      </Frame>

      <Container>
        <Box>
          <Title>
            <H>Eat N Split</H>
            <H3>React App</H3>
          </Title>

          <RepoButton href={"https://github.com/dpok360/the-wild-oasis"}>
            <p>Github repo</p>
          </RepoButton>

          <Hr />

          <Hr />
          <div>
            <P>
              The Eat 'n Split app is a simple ract app to manage shared
              expenses with friends. Whether you're splitting a dinner bill or
              tracking shared costs, this app helps you keep everything in
              order. It maintains a list of friends and their respective
              balances, ensuring transparency and ease of use in financial
              interactions within your social circle.
            </P>
          </div>

          <Hr />

          <div>
            <H4>Features:</H4>
            <ul>
              <Li>
                <strong> Add Friends: </strong> add new friends with their names
                and profile pictures.
              </Li>
              <Li>
                <strong>Easily Select Friends: </strong> View a list of friends
                with their current balance and select friends to handle
                transactions.
              </Li>
              <Li>
                <strong> Split Bills: </strong> Split expenses with selected
                friends by inputting the total bill amount and specifying the
                amounts paid.
              </Li>
              <Li>
                <strong>Dynamic Form Handling: </strong> Use responsive forms
                for adding friends and splitting bills.
              </Li>
              <Li>
                <strong> State Management:</strong> Efficiently manage the state
                of friends, form visibility, and selected friends using the
                useState hook.
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Tech Stack </H4>
            <ul>
              <Li>
                <strong>Frontend:</strong> React.
              </Li>
              <Li>
                <strong> State Management:</strong> useState hook.
              </Li>
              <Li>
                <strong> CSS::</strong> Custom styles for a clean and
                user-friendly interface.
              </Li>
            </ul>
          </div>

          <Hr />

          <div>
            <H4>Learning and Improvement:</H4>
            <P>
              While developing the Eat 'n Split app, I focused on enhancing my
              skills in React and frontend development. This project provided
              valuable experience in using useState for state management and
              designing responsive user interfaces. Moving forward, I aim to
              improve code modularity by implementing clearer separation of
              concerns and reusable components, ensuring scalability and
              maintainability in future projects. This iterative learning
              process continues to shape my abilities as a developer committed
              to delivering efficient and user-friendly applications.
            </P>
          </div>
          <Hr />
          <div>
            <H4>Conclusion:</H4>
            <P>
              The Eat 'n Split app offers a practical way to handle shared
              expenses among friends. Its user-friendly interface and dynamic
              functionality make it an excellent tool for managing financial
              interactions in social settings. This project demonstrates
              proficiency in React and state management, showcasing the ability
              to build responsive and interactive web applications.
              <P>
                I learned how to effectively use React hooks for state
                management, create dynamic and responsive forms, and design a
                user-friendly interface. Additionally, I gained experience in
                maintaining clean and modular code for scalability and
                maintainability.
              </P>
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

export default EatNSplit;
