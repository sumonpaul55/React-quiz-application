import React from "react";
import classes from "../Styels/progressbar.module.css";
import Button from "./Button";

const ProgressBar = ({ progressparcent, next, prev, submit }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progressparcent}% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: `${progressparcent}%` }}></div>
        </div>
      </div>
      <Button className="button next" onClick={progressparcent === 100 ? submit : next}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
