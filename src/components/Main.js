import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { AJD } from "../components/AllSVGs";
import { useEffect, useState } from "react";
import Intro from "./Intro";
import { motion } from "framer-motion";
import Loader from "./Loader";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 800px) {
    color: ${(props) => (props.click ? props.theme.text : props.theme.body)};

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
    color: ${(props) => props.theme.body};
    h2 {
      text-shadow: 3px 3px 10px ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.body};
    h2 {
      text-shadow: 3px 3px 10px ${(props) => props.theme.text};
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
    color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
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

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "92%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  // & > :first-child {
  //   animation: ease-in 1s forwards;
  // }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 800px) {
    right: 0;
    height: ${(props) => (props.click ? "50%" : "0%")};
    width: ${(props) => (props.click ? "100%" : "0%")};
  }
`;

const pageTransition = {
  inX: {
    opacity: 1,
    x: 0,
  },
  outX: {
    opacity: 0,
    x: "-100vw",
  },
};

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClick(true);
    }, 2000);
  }, []);

  return (
    <MainContainer animate="inX" exit="outX" variants={pageTransition}>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <DarkDiv click={click} />
          <Container>
            <LogoComponent theme={click ? "dark" : "light"} />
            <SocialIcons theme={click ? "dark" : "light"} />

            <Center click={click}>
              <AJD
                width={click ? 35 : 200}
                height={click ? 42 : 241}
                fill="currentColor"
                transition="1s linear"
              />
              <span>Click here..</span>
            </Center>

            <Contact>
              <a
                href="mailto:anthony.j.dube@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
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

            <WORK to="/work" click={click ? 1 : 0}>
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
              <ABOUT to="/about" click={click ? 1 : 0}>
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
          </Container>
          {click ? <Intro click={click ? 1 : 0} /> : null}
        </>
      )}
    </MainContainer>
  );
};

export default Main;
