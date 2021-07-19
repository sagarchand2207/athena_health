import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import PropTypes from "prop-types";

const CustomToggle = ({ title, eventKey, headerClass }) => {
  const currentEventKey = useContext(AccordionContext);
  const onClickToggle = useAccordionToggle(eventKey);
  const isOpen = currentEventKey === eventKey;

  return (
    <Card.Header
      className={`${headerClass} ${isOpen ? "arrow-up" : "arrow-down"}`}
      onClick={onClickToggle}
    >
      <span eventkey={eventKey}>{title}</span>
    </Card.Header>
  );
};

CustomToggle.propTypes = {
  title: PropTypes.string.isRequired,
  eventKey: PropTypes.string,
  headerClass: PropTypes.string,
};

CustomToggle.defaultProps = {
  eventKey: "",
  title: "",
  headerClass: "",
};

export default CustomToggle;
