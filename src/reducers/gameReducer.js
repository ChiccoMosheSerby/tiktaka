import { useReducer } from "react";
import { initial3x3BoardState } from "../constants";
import { calculateWinner, checkIsDraw } from "../utils";

export const reducerTypes = {
  ON_SQUARE_CLICK: "onSquareClick",
  RESTART_GAME: "restartGame",
  SET_PROGRESS_BAR: "setProgressBar",
  CHECK_WINNER: "checkWinner",
  CHECK_DRAW: "checkDraw",
};
const initialState = {
  board: initial3x3BoardState,
  xNext: true,
  winner: null,
  isDraw: false,
  progressBarWidth: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const { board, winner, xNext,  progressBarWidth } = state;
  const {
    ON_SQUARE_CLICK,
    RESTART_GAME,
    CHECK_WINNER,
    CHECK_DRAW,
  } = reducerTypes;
  switch (type) {
    case ON_SQUARE_CLICK: {
      const updatedBoard = [...board];
      if (winner || board[payload.position]) {
        return { ...state };
      }
      updatedBoard[payload.position] = xNext ? "X" : "O";
      return { ...state, board: updatedBoard, xNext: !xNext };
    }
    case RESTART_GAME: {
      return { ...initialState };
    }
    case CHECK_WINNER: {
      const therIsWinner = calculateWinner(board);
      if (!!therIsWinner) {
        return {
          ...state,
          winner: therIsWinner,
        };
      } else {
        const draw = checkIsDraw(board);
        if (draw) {
          return { ...state, isDraw: true };
        } else {
          return { ...state, progressBarWidth: progressBarWidth + 10 };
        }
      }
    }
    case CHECK_DRAW: {
      const draw = !winner ? checkIsDraw(board) : false;
      return { ...state, isDraw: draw };
    }
     default :{
      throw new Error(`useGameReducer ERROR: Unhandled type: ${action.type}`);
    }
  }
};

export const useGameReducer = () => {
  return [...useReducer(reducer, initialState), reducerTypes];
};
