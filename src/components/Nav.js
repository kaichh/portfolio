import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pdf from "../resume.pdf";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          KC HUANG
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to={Pdf} target="_blank">
            Resume
          </Link>
          {/* <a href={Pdf} rel="noopener noreferrer" target="_blank">
            Resume
          </a> */}
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  letter-spacing: 3px;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    padding-left: 2rem;
    justify-content: flex-end;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Press Start 2P";
    font-weight: lighter;
    letter-spacing: 4px;
  }
  li {
    padding-left: 2.5rem;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      a {
        color: #23d997;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    padding: 5rem 7rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
    h1 {
      font-size: 1rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    ul {
      padding-left: 0rem;
      gap: 1rem;
    }
    li {
      padding-left: 0rem;
    }
  }
`;

export default Nav;
