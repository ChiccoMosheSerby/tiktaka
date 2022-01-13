import { Patterns } from "./constants";

export function calculateWinner(squares =[]) {
  let allIsFilled = true;
  for (let i = 0; i < Patterns.length; i++) {
    const [a, b, c] = Patterns[i];
    if (!squares[a] && !squares[b] && !squares[c]) {
      allIsFilled = false;
    }
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // returns X or O
    }
  }
  return allIsFilled ? false : null;
}
export function checkIsDraw(squares =[]) {
  let draw = true;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      draw = false;
    }
  }
  return draw;
}
