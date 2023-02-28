import React from "react";
import diceImg from "../img/diceroller2.gif";
// Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const DiceSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <h2>DiceRoller</h2>
        </div>
        <p>An Android app that can roll a dice</p>
        <div id="link">
          <a
            href="https://github.com/kaichh/DiceRoller"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button>Repo</button>
          </a>
        </div>
      </Description>
      <StyledDiceImg>
        <img src={diceImg} alt="DiceRoller App" />
      </StyledDiceImg>
    </About>
  );
};

const StyledDiceImg = styled(Image)`
  width: 60%;
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 60vh;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;

export default DiceSection;
