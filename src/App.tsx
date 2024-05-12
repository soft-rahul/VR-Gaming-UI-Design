import { useState } from "react";
import GameIntro from "./components/Screens/GameIntro";
import GameInstructions from "./components/Screens/GameInstructions";

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showGameStartingScreen, setShowGameStartingScreen] = useState(false);
  return (
    <>
      {showIntro && !showInstructions && !showGameStartingScreen && (
        <GameIntro />
      )}
      {!showIntro && showInstructions && !showGameStartingScreen && (
        <GameInstructions />
      )}
      {!showIntro && !showInstructions && showGameStartingScreen && (
        <GameIntro />
      )}
    </>
  );
};

export default App;
