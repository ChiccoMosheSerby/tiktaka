import React, {  useEffect } from "react";
import Board from "../Board/Board";
import RestartBtn from "./RestartBtn";
import GameHeadMsg from "./GameHeadMsg";
import { FlexContainer } from "./Game.style";
import { useGameReducer } from "../../reducers/gameReducer";

const Game = () => {
  const [state, dispatch, reducerTypes] = useGameReducer();
  const { board, winner, isDraw, progressBarWidth,gameRuns } = state;
  const firstClick = gameRuns < 1
  useEffect(() => {
    dispatch({
      type: reducerTypes.CHECK_WINNER,
    });
  }, [board]);

  useEffect(() => {
    dispatch({
      type: reducerTypes.CHECK_DRAW,
    });
  }, [winner]);

  const onSquareClick = (position) => {
    dispatch({
      type: reducerTypes.ON_SQUARE_CLICK,
      payload: { position },
    });
  };

  const restartGame = () => {
    dispatch({
      type: reducerTypes.RESTART_GAME,
    });
  };
  const headMsg = winner
    ? `${winner} won the game!`
    : isDraw
    ? "Draw"
    : "Tiki Taka Game";

  return (
    <FlexContainer>
      <GameHeadMsg msg={headMsg} />
      <Board squares={board} onSquareClick={onSquareClick} firstClick={firstClick}/>
      <RestartBtn
        progressBarWidth={progressBarWidth}
        restartGame={restartGame}
        isDraw={isDraw}
        winner={winner}
      />
    </FlexContainer>
  );
};

export default Game;
