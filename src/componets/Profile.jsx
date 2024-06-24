import styled from "styled-components";
import ProfileCardDetail from "./ProfileCardDetail";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-grey-200);
  scroll-behavior: smooth;
  border-bottom: none;
`;
const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  padding: 10px;
`;

function Profile() {
  return (
    <>
      <StyledProfile></StyledProfile>
    </>
  );
}

export default Profile;
