import React from "react";
import classes from "../Styels/quistion.module.css";
import Answer from "./Answer";

const Quistion = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answer input={false} options={answer.options} key={index} />
    </div>
  ));
};

export default Quistion;
