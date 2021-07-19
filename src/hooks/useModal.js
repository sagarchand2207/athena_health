import { useState } from "react";

const useModal = (showState = false) => {
  const [show, setShow] = useState(showState);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return {
    show,
    toggle,
  };
};

export default useModal;
