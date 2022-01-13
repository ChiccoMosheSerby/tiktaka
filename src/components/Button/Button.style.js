import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 200px;
  letter-spacing: 0.02857em;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: var(--mainColor);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--textColor);
  border: none;
  outline: none;
  max-width:100%;
  transition: width .4s ease-in-out;
  :hover {
    color: #fff;
  }

  ${({ extraStyling }) => extraStyling && extraStyling}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--disabledBtnColor);
      cursor: not-allowed;
    `}
`;
