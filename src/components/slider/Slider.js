import React from "react";
import PropTypes from "prop-types";
import SliderContext from "../../context/SliderContext";
import useSizeElement from "../../hooks/useSizeElement";
import useSliding from "../../hooks/useSliding";
import SliderArrowBtn from "./SliderArrowBtn";
const Slider = ({ children }) => {
  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
    useSliding(width, React.Children.count(children));

  const contextValue = {
    elementRef,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <div className="slider-wrapper">
        <div className="slider">
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SliderArrowBtn onClick={handlePrev} type="prev" />}
        {hasNext && <SliderArrowBtn onClick={handleNext} type="next" />}
      </div>
    </SliderContext.Provider>
  );
};

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Slider.defaultProps = {
  children: null,
};

export default Slider;
