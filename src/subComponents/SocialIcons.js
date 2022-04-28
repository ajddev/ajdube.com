import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LinkedIn, Github, Twitter, Dribbble } from "../components/AllSVGs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  svg.nav-link {
    fill: ${(props) =>
      props.color === "dark" ? DarkTheme.body : DarkTheme.text};
    fill: ${(props) => props.override} !important;
  }

  @media (max-width: 800px) {
    left: 1rem;
    & > *:not(:last-child) {
      margin: 0.2rem 0;
    }
    svg.nav-link {
      width: 20px;
      fill: ${(props) =>
        props.color === "dark" ? DarkTheme.text : DarkTheme.body};
      fill: ${(props) => props.override} !important;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 800px) {
    background-color: ${(props) =>
      props.color === "dark" ? DarkTheme.body : DarkTheme.text};
    background-color: ${(props) => props.override} !important;
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons override={props.override}>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/ajdube/"
          target="_blank"
          style={{ color: "inherit" }}
          rel="noreferrer"
        >
          <LinkedIn width={25} height={25} className="nav-link" />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          href="https://github.com/ajddev"
          target="_blank"
          style={{ color: "inherit" }}
          rel="noreferrer"
        >
          <Github width={25} height={25} className="nav-link" />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          href="https://twitter.com/ajddev"
          target="_blank"
          style={{ color: "inherit" }}
          rel="noreferrer"
        >
          <Twitter width={25} height={25} className="nav-link" />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          href="https://dribbble.com/ajdube"
          target="_blank"
          style={{ color: "inherit" }}
          rel="noreferrer"
        >
          <Dribbble width={25} height={25} className="nav-link" />
        </a>
      </motion.div>

      <Line
        override={props.override}
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "6rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
