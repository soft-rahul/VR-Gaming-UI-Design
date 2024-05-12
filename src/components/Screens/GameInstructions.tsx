import ButtonSkin from "../BTN/Button";
import Wrapper from "../Wrapper/Wrapper";
import WrapperText from "../Wrapper/WrapperText";

interface Props {
  playHandler: () => void;
  showGameIntro: () => void;
}

const GameInstructions = (props: Props) => {
  const { playHandler, showGameIntro } = props;
  return (
    <Wrapper>
      <WrapperText>
        <div className="instructions-wrapper">
          <div className="instructions">
            <h1 className="general-heading">Instructions</h1>
            <ol>
              <li>
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem
              </li>
              <li>
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem
              </li>
              <li>
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem
              </li>
              <li>
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem
              </li>
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
