import { useState } from "react";
import GameIntro from "./components/Screens/GameIntro";
import GameInstructions from "./components/Screens/GameInstructions";

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
      {!showIntro && !showInstructions && showGameStartingScreen && <div></div>}
    </>
  );
};

export default App;
