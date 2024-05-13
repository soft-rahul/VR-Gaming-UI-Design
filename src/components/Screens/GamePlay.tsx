import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Wrapper from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";
import WrapperText from "../Wrapper/WrapperText";
import { Howl } from "howler";
import Sound from "../../assets/countDownSound.mp3";
const countDownSound = new Howl({
  src: [Sound],
});

const GamePlay = () => {
  const [key, setKey] = useState(3);
  useEffect(() => {
    countDownSound.play();
    return () => {
      countDownSound.stop();
    };
  }, []);

  return (
    <Wrapper>
      {key > 0 ? (
        <div className="playContainer">
          <div className="playTitle">
            <h2>Game starting in...</h2>
          </div>
          <div className="playTimer">
            <CountdownCircleTimer
              isPlaying
              duration={1}
              colors={"#ffffff"}
              strokeWidth={16}
              trailColor="#bbbbbb"
              onComplete={() => {
                setKey((prev) => prev - 1);
                return {
                  shouldRepeat: true,
                };
              }}
            >
              {() => <div className="play-label">0{key}</div>}
            </CountdownCircleTimer>
          </div>
        </div>
      ) : (
        <WrapperText>
          <div className="play-game-label">Let's Play</div>
        </WrapperText>
      )}
    </Wrapper>
  );
};

export default GamePlay;
