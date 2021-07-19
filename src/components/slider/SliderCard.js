import React, { useContext } from "react";
import SliderContext from "../../context/SliderContext";
import PropTypes from "prop-types";

const SliderCard = ({ imgSrc, title, subTitle, onButtonClick }) => {
  const slider = useContext(SliderContext);
  return (
    <div ref={slider.elementRef} class="item">
      <img src={imgSrc} alt="info-img" />
      <div class="item__overlay">
        <div className="card-desc">
          <h4>{title}</h4>
          <h3>{subTitle}</h3>
        </div>
        <div class="item__body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            name="play-button"
            onClick={() => {
              onButtonClick();
            }}
            className="btn one-button play-button"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

SliderCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

SliderCard.defaultProps = {
  imgSrc: "",
  title: "",
  subTitle: "",
  onButtonClick: () => {},
};
export default SliderCard;
