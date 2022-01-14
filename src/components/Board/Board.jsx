import React from "react";
import PropTypes from "prop-types";
import Square from "../Square/Square";
import { StyledBoard } from "./Board.style";

const Board = ({ squares, onSquareClick }) => {
  return (
    <StyledBoard>
      {squares?.map((singleSquare, idx) => (
        <Square
          val={singleSquare}
          key={idx}
          onSquareClick={() => onSquareClick(idx)}
        />
      ))}
    </StyledBoard>
  );
};

Board.propTypes = {
  squares: PropTypes.array,
  onSquareClick: PropTypes.func,
  content: PropTypes.any,
  extraStyling: PropTypes.object,
};

Board.defaultProps = {
  squares: [],
  onSquareClick: () => {},
};
export default Board;
