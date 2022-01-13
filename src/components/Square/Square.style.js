import styled, { css } from "styled-components";

export const StyledSquare = styled.div`
  flex: 33.3%;
  height: 33.3%;
  border: 2px solid #373737;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
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
