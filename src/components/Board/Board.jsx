import React from "react";
import Square from "../Square/Square";
import { StyledBoard } from "./Board.style";

const Board = ({ squares, onSquareClick }) => {

  return (
      <StyledBoard>
        {squares?.map((singleSquare, idx) => (
          <Square val={singleSquare} key={idx} onSquareClick={() => onSquareClick(idx)} />
        ))}
      </StyledBoard>
  );
};

export default Board;
