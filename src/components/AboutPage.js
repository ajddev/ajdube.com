import React from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 800px) {
    position: initial;
    line-height: 1.25;
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
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
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 800px) {
    color: ${(props) => props.theme.text};
    h2 {
      font-size: 1rem;
    }
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
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
  position: absolute;
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

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" override="#dad271" />
        <ParticleComponent theme="dark" />
        <Contact>
          <a
            href="mailto:anthony.j.dube@gmail.com"
            target="_blank"
            rel="noreferrer"
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
          </a>
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

        <Main>
          I'm a junior developer looking for a role in an established software
          company where I can leverage and enhance my analytical, technical, and
          computer skills.
          <br />
          <br />
          I am quietly confident, naturally curious, and perpetually working to
          improve my technique and knowledge. I'm a student of Udemy to keep
          up-to-date with modern design.
          <br />
          <br />
          I'm happily married and settled in Northern Vermont. My wife and I
          recently adopted a rescue puppy. I enjoy traveling, playing chess and
          listening to 90's rock.
        </Main>
        <BigTitle text="ABOUT" top="5rem" right="5rem" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
