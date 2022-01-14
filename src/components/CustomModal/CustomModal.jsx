import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { ModalOverlay, Modal, Content } from "./CustomModal.style";

const ScrollBox = ({ children }) => {
  const allowScrollRef = useRef();
  useEffect(() => {
    disableBodyScroll(allowScrollRef.current, {
      reserveScrollBarGap: true,
    });

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      ref={allowScrollRef}
      style={{ overflowY: "auto", WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </div>
  );
};

const CustomModal = ({ toggle, content, isShowing, extraStyling }) => {
  const containerRef = useRef();
  const close = () => {
    toggle(false);
  };

  const ModalContent = (
    <Modal
      extraStyling={extraStyling}
      aria-modal
      aria-hidden
      tabIndex={-1}
      role="dialog"
    >
      <Content ref={containerRef} className="modalContent">
        <ScrollBox>{content}</ScrollBox>
      </Content>
    </Modal>
  );

  return (
    <>
      {isShowing &&
        ReactDOM.createPortal(
          <>
            <ModalOverlay />
            {ModalContent}
          </>,
          document.body
        )}
    </>
  );
};

CustomModal.propTypes = {
  isShowing: PropTypes.bool,
  toggle: PropTypes.func,
  content: PropTypes.any,
  extraStyling: PropTypes.object,
};

CustomModal.defaultProps = {
  portal: true,
  isShowing: false,
};
export default CustomModal;