import styled from "styled-components";
import MainNav from "./MainNav";
import Contacts from "./Contacts";
import ProjectTab from "./ProjectTab";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 0;
  margin: 0;
  border-right: qpx solid var(--color-grey-100);
  grid-row: auto;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid var(--color-grey-200);
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
      <ProjectTab />
      <Contacts />
    </StyledSidebar>
  );
}
export default Sidebar;
