import Wrapper from "../Wrapper/Wrapper";
import WrapperText from "../Wrapper/WrapperText";

import GameLogo from "../../assets/game.png";
import ButtonSkin from "../BTN/Button";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../API/url";
import { HardCodedGameName } from "../../Constant/gameName";

const GameIntro = () => {
  const [gameName, setGameName] = useState(HardCodedGameName);
  const playHandler = () => {
    console.log("How to Play");
  };
  const startGameHandler = () => {
    console.log("Start Game");
  };

  // fetch function
  const fetchGameDetails = async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
  };
  // fetch game name
  useEffect(() => {
    fetchGameDetails()
      .then((data) => {
        setGameName(data?.Game?.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <div className="intro-container">
        <WrapperText>
          <section className="intro-content-wrapper">
            <div className="intro-content">
              <h1>{gameName.toUpperCase()}</h1>
              <p>
                Exhilarating and action-packed gaming experience that combines
                strategic thinking, quick reflexes, and a quest for treasure.
                Players find themselves in a dynamic and challenging environment
                where they must navigate through a series of laser-filled
                obstacles, complete various tasks, and strive to uncover the
                ultimate treasure.
              </p>
              <div>
                <div className="label-box">
                  <span className="label-light">Duration</span>
                  <span className="label-bold"> 9 to 15 mins</span>
                </div>
                <div className="label-box">
                  <span className="label-light">Maximum Player</span>
                  <span className="label-bold"> 12 Players</span>
                </div>
              </div>
            </div>
            <div className="intro-buttons">
              <ButtonSkin label="How To Play" onChange={playHandler} />
              <ButtonSkin label="Start Game" onChange={startGameHandler} />
            </div>
          </section>
        </WrapperText>
        <div className="intro-game-pic">
          <img src={GameLogo} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default GameIntro;
