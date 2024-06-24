import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaSquareUpwork, FaSquareXTwitter } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { ImStackoverflow } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  gap: 8px;
`;

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.3rem;
  transition: box-shadow 0.3s ease;
  &:hover {
    background-color: rgb(228, 228, 237);
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(42, 40, 40, 0.2);
    border-radius: 12px;
  }
`;

const StyledH5 = styled.h5`
  color: var(--color-grey-500);
  margin: 12px;
`;

function SocialLinks() {
  return (
    <>
      <StyledH5>CONNECT WITH ME</StyledH5>
      <LinkContainer>
        <LinkBox>
          <a
            href="https://github.com/dpok360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </LinkBox>

        <LinkBox>
          <a
            href="https://www.linkedin.com/in/deepak-suryavanshi-1811ab108/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
        </LinkBox>

        <LinkBox>
          <a
            href="https://www.upwork.com/freelancers/~0153783d503d306932"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareUpwork />
          </a>
        </LinkBox>

        <LinkBox>
          <a
            href="https://x.com/360Deepak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
        </LinkBox>

        <LinkBox>
          <a
            href="https://www.instagram.com/deepaksurya1000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </LinkBox>

        <LinkBox>
          <a
            href="https://www.facebook.com/deepak.suryavanshi.528/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </LinkBox>
      </LinkContainer>
    </>
  );
}

export default SocialLinks;
