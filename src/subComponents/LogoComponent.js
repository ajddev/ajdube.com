import React from "react";
import { NavLink } from "react-router-dom";
import { AJD } from "../components/AllSVGs";
import { DarkTheme } from "../components/Themes";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  position: fixed;
  left: 2rem;
  z-index: 3;
  top: 2rem;
`;

const LogoComponent = (props) => {
  return (
    <Logo>
      <div>
        <NavLink style={{ color: "inherit" }} to={{ pathname: "/" }}>
          <AJD
            width={35}
            height={42}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
    </Logo>
  );
};

export default LogoComponent;
