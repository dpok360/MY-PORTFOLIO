import React from "react";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid var(--color-grey-200);
  background: white;
  width: 100%;
  overflow: hidden;
  height: 130px;
`;

const P = styled.p`
  font-size: 16px;
  color: var(--color-grey-500);
  margin: 20px auto;
`;
const P2 = styled(P)`
  margin: 20px auto;
`;
function Footer() {
  return (
    <Conatiner>
      <div>
        <P>Deepsk Suryavanshi</P>
        <P2>
          <ImLocation />
          <span>Nepal</span>
        </P2>
      </div>
      <div>
        <SocialLinks />
      </div>

      <div>
        <P>&copy; 2024</P>
      </div>
    </Conatiner>
  );
}

export default Footer;
