import React  from "react";
import { StyledSquare } from "./Square.style";

const Square = ({ val = 'X', onSquareClick = ()=>{}, clickable= false }) => {
  const color = val === 'X' ? 'red' : 'blue';
  const clickHandler = !clickable ? ()=>{} : onSquareClick;

  return (
    <StyledSquare color={color} onClick={clickHandler} disabled={!clickable}>
      {val}
    </StyledSquare>
  );
};

export default Square;
