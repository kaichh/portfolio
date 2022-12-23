import React from "react";
import mymaPic from "../img/mymathapps.gif";
// Styles
import { About, Description, Image, Hide } from "../styles";

const MyMaSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>MyMathApps</h2>
          </Hide>
        </div>
        <p>Rebuilt and refactored an online textbook store</p>
        <div id="link">
          <a
            href="https://mymathapps.herokuapp.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button>Demo</button>
          </a>
          <a
            href="https://github.com/kaichh/Online_Textbook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button>Repo</button>
          </a>
        </div>
      </Description>
      <Image>
        <img src={mymaPic} alt="MyMathApps Website" />
      </Image>
    </About>
  );
};

export default MyMaSection;
