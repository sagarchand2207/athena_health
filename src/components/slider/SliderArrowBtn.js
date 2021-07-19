import React from "react";
import ArrowIcon from "../../assets/ArrowIcon";
import PropTypes from "prop-types";

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <ArrowIcon />
    </span>
  </button>
);

SlideButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

SlideButton.defaultProps = {
  onClick: () => {},
  type: "",
};

export default SlideButton;
