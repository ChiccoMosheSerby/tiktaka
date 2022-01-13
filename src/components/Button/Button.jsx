import React from "react";
import { StyledButton } from "./Button.style";

const Button = ({
  children,
  val,
  onClick = () => {},
  extraStyling={}
}) => {
  return (
    <StyledButton onClick={onClick} extraStyling={extraStyling}>
      {val}
    </StyledButton>
  );
};

export default Button;
