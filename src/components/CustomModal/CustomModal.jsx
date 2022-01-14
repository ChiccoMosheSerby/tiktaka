import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
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

const CustomModal = ({
  color,
  portal,
  toggle,
  content,
  showXbtn,
  children,
  isShowing,
  extraStyling,
  clickOutSide,
  overlayZIndex,
}) => {
  const btnRef = useRef();
  const containerRef = useRef();
  const close = () => {
    toggle(false);
  };
  // clickOutSide && useClickOutside([containerRef, btnRef], close);

  const ModalContent = (
    <Modal
      color={color}
      extraStyling={extraStyling}
      aria-modal
      aria-hidden
      tabIndex={-1}
      role="dialog"
    >
      {showXbtn && (
        <div
          data-dismiss="modal"
          aria-label="Close"
          className="closeBtnspanDesktop desktop"
          onClick={close}
          aria-hidden="true"
        >
         X
        </div>
      )}
      <Content ref={containerRef} className="modalContent">
        <ScrollBox>{content}</ScrollBox>
      </Content>
    </Modal>
  );

  return portal ? (
    <>
      {!!children && children}
      {isShowing &&
        ReactDOM.createPortal(
          <>
            <ModalOverlay overlayZIndex={overlayZIndex} />
            {ModalContent}
          </>,
          document.body
        )}
    </>
  ) : (
    <>
      {!!children && children}
      {isShowing && (
        <>
          <ModalOverlay overlayZIndex={overlayZIndex} />
          {ModalContent}
        </>
      )}
    </>
  );
};

CustomModal.propTypes = {
  portal: PropTypes.bool,
  isShowing: PropTypes.bool,
  toggle: PropTypes.func,
  content: PropTypes.any,
  extraStyling: PropTypes.object,
  submitCallback: PropTypes.func,
  color: PropTypes.string,
  showXbtn: PropTypes.bool,
  showSubmit: PropTypes.bool,
  lockBody: PropTypes.bool,
  isMobile: PropTypes.bool,
  clickOutSide: PropTypes.bool,
  onlyHeaderSwipe: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  reset: PropTypes.func,
};

CustomModal.defaultProps = {
  showSubmit: true,
  showXbtn: true,
  portal: true,
  isShowing: false,
  color: "#ff8080",
  lockBody: true,
  clickOutSide: true,
};
export default CustomModal;


//usage
// import CustomModal from "../CustomModal/CustomModal";
// const [show, setShow] = useState(false);
// <CustomModal
// content="test"
// isShowing={show}
// toggle={(bool) => setShow(bool)}
// />