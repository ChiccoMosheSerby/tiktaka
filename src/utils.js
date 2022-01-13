import { directionsValues, Patterns } from "./constants";

export function calculateWinner(squares = []) {
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

const isWin = (ArrArrs) => {
  for (let i = 0; i < ArrArrs.length; i++) {
    if (ArrArrs[i] === 4) {
      return true;
    }
  }
  return false;
};

export function calculateMultiWinner(squares, position) {
  const player = squares[position] ? squares[position] : "none";
  let directionValidationArrs = Array(directionsValues.length).fill(0);
  directionsValues.forEach((value, idx) => {
    for (let i = 1; i < 5; i++) {
      if (
        typeof squares[position + i * value] !== "undefined" &&
        squares[position + i * value] === player
      ) {
        directionValidationArrs[idx]++;
      } else {
        directionValidationArrs[idx] = 0;
      }
    }
  });
  return isWin(directionValidationArrs) ? player : null;
}

export const checkIsClickable = (squares , idx ) => {
  directionsValues.forEach((value) => {
    if (squares[idx + value]) {
      return true;
    }
  });
  return false;
};

export function checkIsDraw(squares = []) {
  let draw = true;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      draw = false;
    }
  }
  return draw;
}
