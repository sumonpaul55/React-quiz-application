import React, { useRef, useState } from "react";
import classes from "../Styels/progressbar.module.css";
import Button from "./Button";

const ProgressBar = ({ progressparcent, next, prev, submit }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();
  function toggletooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progressparcent}% - 65px)`;
    }
  }
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progressparcent}% Cimplete!
        </div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: `${progressparcent}%` }} onMouseOver={toggletooltip} onMouseOut={toggletooltip}></div>
        </div>
      </div>
      <Button className="button next" onClick={progressparcent === 100 ? submit : next}>
        <span>{progressparcent === 100 ? "Submit" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
