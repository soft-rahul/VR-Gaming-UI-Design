import { useEffect, useState } from "react";
import GameIntro from "./components/Screens/GameIntro";
import GameInstructions from "./components/Screens/GameInstructions";
import GamePlay from "./components/Screens/GamePlay";
import { Howl } from "howler";
import BgSound from "./assets/bgMusic.mp3";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showGameStartingScreen, setShowGameStartingScreen] = useState(false);

  const playTheGameHandler = () => {
    setShowIntro(false);
    setShowInstructions(false);
    setShowGameStartingScreen(true);
  };

  const showInstructionsHandler = () => {
    setShowIntro(false);
    setShowInstructions(true);
    setShowGameStartingScreen(false);
  };

  const showGameIntroHandler = () => {
    setShowIntro(true);
    setShowInstructions(false);
    setShowGameStartingScreen(false);
  };

  useEffect(() => {
    const bgSound = new Howl({
      src: [BgSound],
      volume: 0.4,
      autoplay: true,
    });
    bgSound.play();
    return () => {
      bgSound.stop();
    };
  }, []);

  return (
    <>
      {showIntro && !showInstructions && !showGameStartingScreen && (
        <GameIntro
          playHandler={playTheGameHandler}
          showInstructions={showInstructionsHandler}
        />
      )}
      {!showIntro && showInstructions && !showGameStartingScreen && (
        <GameInstructions
          playHandler={playTheGameHandler}
          showGameIntro={showGameIntroHandler}
        />
      )}
      {!showIntro && !showInstructions && showGameStartingScreen && (
        <GamePlay />
      )}
    </>
  );
};

export default App;
