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
      val={``}
      extraStyling={{ height: "30px", marginTop: "10px", opacity: 0 }}
    />
  );
};

export default RestartBtn;
