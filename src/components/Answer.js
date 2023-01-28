import React from "react";
import classes from "../Styels/answer.module.css";
import Checkbox from "./Checkbox";
const Answer = ({ options = [], handleAnswerchange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox key={index} className={classes.answer} text={option.title} vlaue={index} checked={option.checked} onChange={handleAnswerchange} />
      ))}
    </div>
  );
};

export default Answer;
