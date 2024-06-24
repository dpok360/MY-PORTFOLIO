import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  background: black;
  color: white;
  border: 1px solid black;
  border-radius: 25px;
  padding: 8px 26px;
  margin-left: 20px;
  width: fit-content;
  font-size: 13px;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0px;
  line-height: 21px;
  text-decoration: none;

  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }

  &:hover * {
    color: inherit;
  }
`;

const IconWrapper = styled.div`
  margin-right: 5px;
  font-size: 20px;
`;

function RepoButton({ href, children }) {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        <FaGithub />
      </IconWrapper>
      {children}
    </StyledLink>
  );
}

export default RepoButton;
