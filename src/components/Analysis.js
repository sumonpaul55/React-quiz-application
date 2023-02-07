import React from "react";
import classes from "../Styels/analysis.module.css";
import Quistion from "./Quistion";

const Analysis = ({ answers }) => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>

      <Quistion answers={answers} />
    </div>
  );
};

export default Analysis;
