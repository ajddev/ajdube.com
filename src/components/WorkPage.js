import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";
import { useRef, useEffect } from "react";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 800px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

    h2 {
      font-size: 1.25rem;
    }
  }
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 50vh;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 0;
  @media (max-width: 800px) {
    color: ${(props) => props.theme.text};
    h2 {
      font-size: 1rem;
    }
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: fixed;
  top: 50vh;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 800px) {
    color: ${(props) => props.theme.text};
    h2 {
      font-size: 1rem;
    }
  }
`;
const BottomBar = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 800px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    h2 {
      font-size: 1rem;
    }
  }
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  @media (max-width: 800px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" override="#dad271" />
        <Contact
          target="_blank"
          to={{ pathname: "mailto:dubedeveloper@gmail.com" }}
        >
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Hire me!
          </motion.h2>
        </Contact>
        <BLOG to="/blog">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 3 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/work">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 2 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 4 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
