import { TfiEmail } from "react-icons/tfi";
import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border-radius: 33px !important;
  background: linear-gradient(to right, #a30fd5, #0c27d8, #c02c2c);
  background-size: 200% 100%;
  border: 1px solid transparent !important;
  padding: 8px 16px;
  font-size: 15px;
  font-weight: bold !important;
  letter-spacing: 1.5px;
  background-color: transparent;
  text-transform: uppercase;
  width: 50%;
  color: #ffffffe6;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-decoration: none;
  transition: background-position 0.5s ease;

  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, #383980, #5f4f9f);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

function Email() {
  return (
    <StyledButton>
      <a href="mailto:deepak.suyavanshi.360@gmail.com">
        <TfiEmail />
        <span>Mail</span>
      </a>
    </StyledButton>
  );
}
export default Email;
