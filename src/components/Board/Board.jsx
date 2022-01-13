import React from "react";
import { directionsValues } from "../../constants";
import Square from "../Square/Square";
import { StyledBoard } from "./Board.style";

const Board = ({ squares, onSquareClick, firstClick }) => {
  const renderBoard = () =>
    squares?.map((singleSquare, idx) => {
      let isClickable = false;
      directionsValues.forEach((value) => {
        if (squares[idx + value]) {
          isClickable = true;
        }
      });
      return (
        <Square
          val={singleSquare}
          key={idx}
          position={idx}
          onSquareClick={() => onSquareClick(idx)}
          clickable={firstClick || isClickable}
        />
      );
    });
  return <StyledBoard>{renderBoard()}</StyledBoard>;
};

export default Board;
