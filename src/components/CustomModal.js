import React, { useEffect, useRef, useCallback } from "react";
import { isNil } from "../util";
import PropTypes from "prop-types";

const CustomModal = ({ onClose, show, children, closeButton }) => {
  const modal = useRef(null);
  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        27: () => {
          e.preventDefault();
          onClose();
          document.removeEventListener("keyup", handleKeyUp, false);
        },
      };

      if (show && keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [onClose]
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (!isNil(modal) && show) {
        if (!modal.current.contains(e.target)) {
          onClose();
          document.removeEventListener("click", handleOutsideClick, false);
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp, false);
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("keyup", handleKeyUp, false);
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick]);

  return (
    <div className={`modal_overlay ${show ? "show__modal" : "hidden__modal"}`}>
      <div className="custom__modal__container" ref={modal}>
        {closeButton && (
          <button type="button" className="close__button" onClick={onClose} />
        )}
        {children}
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  show: PropTypes.bool.isRequired,
  closeButton: PropTypes.bool,
};

CustomModal.defaultProps = {
  onCloseRequest: () => {},
  children: null,
  show: false,
  closeButton: false,
};

export default CustomModal;
