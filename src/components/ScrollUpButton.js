import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollUpButton() {
  const [visible, setVisible] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const Scrolling = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
      setVisible(300 < scrollValue);
    };
    window.addEventListener("scroll", Scrolling);
    return () => window.removeEventListener("scroll", Scrolling);
  }, [scrollValue]);

  return (
    visible && (
      <div id="up-button" onClick={() => window.scroll(0, 0)}>
        <FontAwesomeIcon icon={faAngleDoubleUp} color="white" size="lg" />
      </div>
    )
  );
}

export default ScrollUpButton;
