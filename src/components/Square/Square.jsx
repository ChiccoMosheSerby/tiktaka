import React from "react";
import { StyledSquare } from "./Square.style";

const Square = ({ val = "X", onSquareClick = () => {}, disabled = false }) => {
  const color = val === "X" ? "red" : "blue";
  return (
    <StyledSquare color={color} onClick={onSquareClick} disabled={disabled}>
      {val}
    </StyledSquare>
  );
};

export default Square;
