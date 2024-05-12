import Wrapper from "../Wrapper/Wrapper";
import WrapperText from "../Wrapper/WrapperText";

import GameLogo from "../../assets/game.png";
import ButtonSkin from "../BTN/Button";

const GameIntro = () => {
  return (
    <Wrapper>
      <div className="intro-container">
        <WrapperText>
          <div>
            <ButtonSkin label="Start" onChange={() => console.log("start")} />
          </div>
        </WrapperText>
        <div className="intro-game-pic">
          <img src={GameLogo} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default GameIntro;
