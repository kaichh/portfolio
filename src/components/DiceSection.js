import React from "react";
import diceImg from "../img/diceroller2.gif";
// Styles
import styled from "styled-components";
import { About, Description, Hide } from "../styles";

const DiceSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>DiceRoller</h2>
          </Hide>
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

const StyledDiceImg = styled.div`
  //flex: auto;
  //overflow: hidden;
  img {
    height: 60vh;
  }
`;

export default DiceSection;
