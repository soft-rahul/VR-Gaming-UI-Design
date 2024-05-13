import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../API/url";
import ButtonSkin from "../BTN/Button";
import Wrapper from "../Wrapper/Wrapper";
import WrapperText from "../Wrapper/WrapperText";
import { HardCodedGameInstruction } from "../../Constant/gameName";

interface Props {
  playHandler: () => void;
  showGameIntro: () => void;
}

const GameInstructions = (props: Props) => {
  const { playHandler, showGameIntro } = props;
  const [instructions, setInstructions] = useState(HardCodedGameInstruction);

  // fetch function
  const fetchGameDetails = async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
  };
  // fetch game instructions
  useEffect(() => {
    fetchGameDetails()
      .then((data) => {
        setInstructions(data?.Game?.playInstruction);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <WrapperText>
        <div className="instructions-wrapper">
          <div className="instructions">
            <h1 className="general-heading">Instructions</h1>
            <ol>
              <li>{instructions}</li>
              <li>{instructions}</li>
              <li>{instructions}</li>
              <li>{instructions}</li>
            </ol>
          </div>
          <div className="instructions-buttons">
            <ButtonSkin label="Go Back" onChange={showGameIntro} />
            <ButtonSkin label="Start Game" onChange={playHandler} />
          </div>
        </div>
      </WrapperText>
    </Wrapper>
  );
};

export default GameInstructions;
