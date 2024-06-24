import { ImLocation } from "react-icons/im";
import styled from "styled-components";

const StyeldDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  color: #19199d;
`;
const StyledP = styled.p`
  color: var(--color-grey-500);
  margin-bottom: 10px;
  text-decoration: underline;
`;

function ProfileCardDetail() {
  return (
    <StyeldDiv>
      <H3>Deepak Suryavanshi</H3>
      <StyledP>Frontend Web Developer</StyledP>
      <StyledP>
        <ImLocation />
        <span>Nepal</span>
      </StyledP>
    </StyeldDiv>
  );
}

export default ProfileCardDetail;
