import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: auto;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #ffffff;
  overflow: scroll;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
