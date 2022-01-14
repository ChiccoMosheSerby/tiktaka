import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GameHeadMsg = ({ msg = "" }) => {
  return <H1 style={{ color: "#fff", height: "50px" }}>{msg}</H1>;
};

export default GameHeadMsg;
