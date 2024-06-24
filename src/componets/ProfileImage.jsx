import { motion } from "framer-motion";
import styled from "styled-components";

const Frame = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  border: 2px solid var(--color-brand-100);
`;

const Img = styled(motion.img)`
  display: block;
  width: 100%;
  height: auto;
  z-index: 1;
`;

function ProfileImage({ custom, variants }) {
  return (
    <Frame>
      <Img
        src="https://github.com/dpok360/IMAGES/blob/main/MyPic%20(1).jpg?raw=true"
        alt="Portfolio image"
        custom={custom}
        variants={variants}
      />
    </Frame>
  );
}

export default ProfileImage;
