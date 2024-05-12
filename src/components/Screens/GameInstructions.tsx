import ButtonSkin from "../BTN/Button";
import Wrapper from "../Wrapper/Wrapper";
import WrapperText from "../Wrapper/WrapperText";

const GameInstructions = () => {
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
            <ButtonSkin label="Go Back" onChange={() => {}} />
            <ButtonSkin label="Start Game" onChange={() => {}} />
          </div>
        </div>
      </WrapperText>
    </Wrapper>
  );
};

export default GameInstructions;
