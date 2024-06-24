import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
  border-bottom: 1px solid var(--color-grey-200);
`;

const Title = styled.p`
  background: var(--color-grey-400);
  background-clip: text;
  color: transparent;
  font-size: 14px;
  padding-left: 39px;
  padding-top: 20px;
  margin-bottom: 10px;
`;
const P = styled.p`
  font-family: "system-ui", "roboto";
  color: var(--color-grey-500);
  padding-left: 40px;
  font-size: 14px;
  &:hover {
    color: var(--color-grey-300);
    cursor: pointer;
  }
`;

const UL = styled.ul`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
`;

function ProjectTab() {
  return (
    <>
      <Container>
        <Title>PROJECTS</Title>
        <nav>
          <UL>
            <li>
              <NavLink to="/wildoasis">
                <span>
                  <P>Wild Oasis</P>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/worldwise">
                <span>
                  <P>Worldwise</P>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/fastpizza">
                <span>
                  <P>Fast Pizza</P>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reactquiz">
                <span>
                  <P>React Quiz</P>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faraway">
                <span>
                  <P>Far Away</P>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/eatnsplit">
                <span>
                  <P>Eat n Split</P>
                </span>
              </NavLink>
            </li>
          </UL>
        </nav>
      </Container>
    </>
  );
}

export default ProjectTab;
