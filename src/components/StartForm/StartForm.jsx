import React from "react";
import Button from "../Button/Button";

const StartForm = ({ startGameHandler }) => {
  return <Button onClick={startGameHandler} val={"START"} />;
};

export default StartForm;
