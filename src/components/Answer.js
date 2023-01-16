import React from "react";
import classes from "../Styels/answer.module.css";
import Checkbox from "./Checkbox";
const Answer = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="text answer" />
    </div>
  );
};

export default Answer;
