import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: "robot0", "system-ui";
  font-size: 30px;
  font-weight: 700;
  padding: 50px;
  background-color: #f0f2f4;
  margin: 200px;
  border-radius: 16px;
`;

function NotFound() {
  return (
    <Container>
      <H1>404 - Not Found</H1>
    </Container>
  );
}

export default NotFound;
