import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";
import { lightTheme } from "./Themes";
import { Design, Develop } from "./AllSVGs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 800px) {
    height: 25vh;
    width: 50vw;
    line-height: 1.25;
    padding: 1.5rem 2rem;
    margin: 2px;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vh);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 800px) {
    font-size: calc(0.75em + 1vh);
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    test-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }

  @media (max-width: 800px) {
    font-size: calc(0.4em + 1vw);
    padding: 0;
    strong {
      margin-bottom: 0.5rem;
    }
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

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" override="#000" />
        <ParticleComponent theme="light" />
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
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Adobe Creative Suite, GIMP, Inkscape, Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develop width={40} height={40} /> Develop
          </Title>
          <Description>
            I value business or brand for which I'm creating, thus I enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, JS, React.js, jQuery, Python, SASS, MySQL</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VSCode, GitHub, JSFiddle, etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
