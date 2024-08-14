import { motion } from "framer-motion";
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVite } from "react-icons/tb";
import styled from "styled-components";

const Icons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const BoxIcon = styled.div`
  border: 1px solid var(--color-grey-50);
  border-radius: 1.6rem;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background: inherit;
`;
const lineVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

function SkillsIcons() {
  return (
    <Icons custom={14} variants={lineVariants}>
      <BoxIcon>
        <FaReact />
      </BoxIcon>
      <BoxIcon>
        <FaHtml5 />
      </BoxIcon>
      <BoxIcon>
        <FaCss3 />
      </BoxIcon>

      <BoxIcon>
        <IoLogoJavascript />
      </BoxIcon>
      <BoxIcon>
        <SiRedux />
      </BoxIcon>
      <BoxIcon>
        <SiReactquery />
      </BoxIcon>

      <BoxIcon>
        <SiReactrouter />
      </BoxIcon>
      <BoxIcon>
        <RiSupabaseFill />
      </BoxIcon>
      <BoxIcon>
        <FaGitAlt />
      </BoxIcon>

      <BoxIcon>
        <FaGithub />
      </BoxIcon>
      <BoxIcon>
        <SiStyledcomponents />
      </BoxIcon>
      <BoxIcon>
        <RiTailwindCssFill />
      </BoxIcon>
      <BoxIcon>
        <TbBrandVite />
      </BoxIcon>
      <BoxIcon>
        <TbBrandFramerMotion />
      </BoxIcon>
      <BoxIcon>
        <SiExpress />
      </BoxIcon>
      <BoxIcon>
        <SiMongodb />
      </BoxIcon>
    </Icons>
  );
}

export default SkillsIcons;
