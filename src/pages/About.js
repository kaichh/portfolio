import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <div>
        <h2>Hi, I am KC Huang. </h2>
        <p>
          I am a master student major in <span>Computer Science</span> at{" "}
          <span>Texas A&M University.</span> <br /> Enjoy coding and studying
          user behaviors. <br />
          Currently looking for good music, authentic ramen, and a SWE summer
          internship &#128515;
        </p>
      </div>
      <div></div>
    </StyledAbout>
  );
};

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

export default About;
