import { MdArrowOutward } from 'react-icons/md';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
const Atag = styled.a`
  font-family: 'Roboto', 'sytem-ui';
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 21px;
  display: flex;
  align-items: center;
  background: black;
  color: white;
  border: 1px solid black;
  border-radius: 25px;
  padding: 4px 10px;
  width: fit-content;
  font-style: normal;
  text-decoration: none;

  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

function Resume() {
  return (
    <ResumeContainer>
      <Atag
        href="https://drive.google.com/file/d/1syUw1HGTFKz_HGKU7b3u_Li1I05OV-4a/view"
        target="_blank"
        rel="noreferrer noopener"
      >
        View Full Resume <MdArrowOutward />
      </Atag>
    </ResumeContainer>
  );
}

export default Resume;
