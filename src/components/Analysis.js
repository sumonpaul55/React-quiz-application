import React from "react";
import classes from "../Styels/analysis.module.css";
import Quistion from "./Quistion";

const Analysis = () => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Quistion />
    </div>
  );
};

export default Analysis;
