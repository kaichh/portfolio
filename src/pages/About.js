import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <div>
        <h2>ABOUT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos
          praesentium perspiciatis repudiandae inventore nihil? Accusamus unde
          amet rerum sequi dolor nam voluptatibus culpa, eaque vero aspernatur
          consequuntur debitis iste veniam harum sapiente officiis soluta
          doloremque, sint explicabo assumenda ut nobis pariatur? Temporibus
          accusamus ducimus laboriosam dolore rem et itaque, sint ea similique
          tempora nobis iste reprehenderit dolorem.
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
    width: 50%;
  }
`;

export default About;
