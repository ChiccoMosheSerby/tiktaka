import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import RestartBtn from "./RestartBtn";
import GameHeadMsg from "./GameHeadMsg";
import CustomModal from "../CustomModal/CustomModal";
import { FlexContainer } from "./Game.style";
import { useGameReducer } from "../../reducers/gameReducer";
import { ModalStyle } from "./Modal.style";

const Game = () => {
  const [state, dispatch, reducerTypes] = useGameReducer();
  const [show, setShow] = useState(false);
  const { board, winner, isDraw, progressBarWidth, gameRuns } = state;
  const firstClick = gameRuns < 1;
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
  useEffect(() => {
    if (winner || isDraw) {
      setShow(true);
    }
  }, [winner, isDraw]);

  const onSquareClick = (position) => {
    dispatch({
      type: reducerTypes.ON_SQUARE_CLICK,
      payload: { position },
    });
  };

  const restartGame = () => {
    setShow(false);
    dispatch({
      type: reducerTypes.RESTART_GAME,
    });
  };
  const headMsg = winner
    ? `${winner} won the game!`
    : isDraw
    ? "Draw"
    : "Tiki Taka Game";

  const renderModalContent = () => {
    return (
      <ModalStyle>
        <GameHeadMsg msg={headMsg} />
        <RestartBtn
          progressBarWidth={progressBarWidth}
          restartGame={restartGame}
          isDraw={isDraw}
          winner={winner}
        />
      </ModalStyle>
    );
  };
  return (
    <FlexContainer>
      <Board
        squares={board}
        onSquareClick={onSquareClick}
        firstClick={firstClick}
      />
      <CustomModal
        extraStyling={{
          background: "#1e1e1e",
        }}
        content={renderModalContent()}
        isShowing={show}
        toggle={(bool) => setShow(bool)}
      />
    </FlexContainer>
  );
};

export default Game;
