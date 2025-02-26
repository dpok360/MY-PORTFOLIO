import styled from 'styled-components';

const Container = styled.div`
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
  font-family: 'system-ui', 'roboto';
  color: var(--color-grey-500);
  padding-left: 40px;
  font-size: 14px;
  &:hover {
    color: var(--color-grey-300);
    cursor: pointer;
  }
`;

function Contacts() {
  return (
    <Container>
      <Title>CONTACT</Title>

      <a href="mailto:deepak.suyavanshi.360@gmail.com">
        <P>Mail</P>
      </a>
      <a
        href="https://www.linkedin.com/in/deepak-suryavanshi-1811ab108/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <P>LinkedIn</P>
      </a>
      <a
        href="https://github.com/dpok360"
        target="_blank"
        rel="noreferrer noopener"
      >
        <P>Github</P>
      </a>
      <a
        href="https://x.com/360Deepak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <P>Twitter</P>
      </a>

      <a
        href="https://drive.google.com/file/d/1syUw1HGTFKz_HGKU7b3u_Li1I05OV-4a/view"
        target="_blank"
        rel="noreferrer noopener"
      >
        <P>Resume</P>
      </a>
    </Container>
  );
}

export default Contacts;
