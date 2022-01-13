import React from "react";

const GameHeadMsg = ({ msg = '' }) => {
  return (
    <h1 style={{ color: "#fff", height: "50px" }}>
      {msg}
    </h1>
  );
};

export default GameHeadMsg;
