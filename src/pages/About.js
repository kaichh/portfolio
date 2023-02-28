import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <div class="container">
        <h2>Hi, I am KC Huang. </h2>
        <p>
          I am a master student major in <span>Computer Science</span> at{" "}
          <span>Texas A&M University.</span> <br /> Enjoy coding and studying
          user behaviors. <br />
          Currently looking for good music, authentic ramen, and a SWE summer
          internship &#128515;
        </p>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  width: 100%;
  height: 90vh;
  //background-color: #080860;

  padding: 5rem 10rem;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //background-color: #132632;
  }

  h2 {
    color: white;
  }
  @media screen and (max-width: 1400px) {
    padding: 5rem 7rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (max-width: 414px) {
    height: auto;
  }
`;

/*
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  div {
    flex: none;
    letter-spacing: 3px;
    width: 50%;
  }
`;
*/

export default About;
