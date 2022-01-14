import React, { useState } from "react";
import StartForm from "./components/StartForm/StartForm";
import Game from "./components/Game/Game";
import GlobalStyle from "./components/styles/GlobalStyle";
import { Main } from "./App.style";

function App() {
  const [startGame, setStartGame] = useState(false);
  return (
    <Main>
      <GlobalStyle />
      {startGame ? (
        <Game />
      ) : (
        <StartForm startGameHandler={() => setStartGame(true)} />
      )}

    </Main>
  );
}

export default App;
