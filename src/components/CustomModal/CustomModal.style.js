import styled, { css, keyframes } from "styled-components";

const ScrollBar = (trackColor = "#fff", width = "4px") => {
  return css`
    /* width */
    &::-webkit-scrollbar {
      margin-right: 2px;
      width: ${width};
    }
    /* Track */
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${trackColor};
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(215, 215, 215, 0.9);
      border-radius: 10px;
      max-height: 94px;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(215, 215, 215, 1);
    }
    scrollbar-color: rgba(215, 215, 215, 1) ${trackColor};
    overflow-y: auto;
  `;
};

const fadeIn = keyframes`
    0% {
       opacity:0.3;
       box-shadow: none;
      }
      100% {
        box-shadow: 0 0 4px 1px #919191;
        opacity:1;
      }
  `;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ overlayZIndex }) =>
    !isNaN(overlayZIndex) ? overlayZIndex : 1040};
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  transition: opacity 0.3s;
  transition-timing-function: linear;
`;

export const Modal = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  transition: opacity 0.3s;
  transition-timing-function: linear;
  border-radius: 4px;
  background-color: ${(props) => props.bg ?? "#fff"};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  outline: 0;
  box-shadow: 0 0 4px 1px #919191;
  overflow: visible;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .head {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    padding: 10px;
  }
  .closeBtnspan {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    color: #808080;
  }
  .closeBtnspanDesktop {
    position: absolute;
    top: 9px;
    right: 11px;
    width: 29px;
    height: 29px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    font-size: 13px;
    background-color: transparent;
    border: none;
    :hover {
      background-color: #fbfbfb;
      border-radius: 50%;
    }
  }
  .dash {
    padding-left: 10px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    color: #d4d4d4;
    pointer-events: none;
    position: relative;
    .dashDiv {
      padding-left: 10px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      position: absolute;
      top: 13px;
      left: 50%;
      top: 50%;
      width: 40px;
      height: 5px;
      border-radius: 50px;
      background-color: #d4d4d4;
      transform: translateX(-50%) translateY(-50%);
      pointer-events: none;
    }
  }
  .reset {
    padding-left: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    color: #808080;
  }
  svg {
    /* margin-right: 5px; */
  }
  .submitBtn {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    ${({ color }) => css`
      background-color: ${color};
    `}
    width: 100%;
    margin: auto;
    color: white;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 4px;
    outline-color: transparent;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
    @media (max-width: 860px) {
      width: 90%;
      justify-self: center;
      animation-name: ${null};
    }
  }
  ${ScrollBar()}
  ${({ extraStyling }) => extraStyling && extraStyling}
`;

export const Content = styled.div`
  transition: all 0.3s ease-in-out;
  /* overflow: auto; */
  /* min-height: 130px; */
  max-height: 95vh;
  max-width: 95vw;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  ${ScrollBar()}
  @media (max-width: 860px) {
    padding: 10px;
  }
`;