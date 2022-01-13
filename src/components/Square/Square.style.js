import styled, { css } from "styled-components";

export const StyledSquare = styled.div`
  width: 2%;
  height: 2%;
  height: calc(1 / 2500); 
  border: 1px solid #5a5a5a;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  box-sizing:border-box;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--disabledBtnColor);
      cursor: not-allowed;
    `}
`;
