import React from "react";
import Button from "../Button/Button";

const RestartBtn = ({ progressBarWidth, restartGame, isDraw, winner }) => {
  return isDraw || !!winner ? (
    <Button
      onClick={restartGame}
      val="Start a new game"
      extraStyling={{ height: "30px", marginTop: "10px" }}
    />
  ) : (
    <Button
      onClick={() => {}}
      val={`${progressBarWidth}%`}
      extraStyling={{
        height: "30px",
        marginTop: "10px",
        width: `${progressBarWidth}%`,
        alignSelf: "flex-start",
        opacity:'.6'
      }}
    />
  );
};

export default RestartBtn;
