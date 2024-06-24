import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--color-grey-200);
  padding: 20px 40px;
`;

const P = styled.p`
  font-family: "Roboto", "sans-serif";
  font-size: 22px;
  font-style: normal;
  font-weight: 200;
  letter-spacing: -0.01em;
  line-height: 42px;
  color: #3b3d41;
  &:hover {
    color: var(--color-grey-400);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <NavLink to="/Home">
            <span>
              <P>Home</P>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">
            <span>
              <P>About</P>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Experience">
            <span>
              <P>Experience</P>
            </span>
          </NavLink>
        </li>
      </NavList>
    </nav>
  );
}
export default MainNav;
