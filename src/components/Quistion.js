import React from "react";
import classes from "../Styels/quistion.module.css";
import Answers from "./Answers";

const Quistion = ({ answers }) => {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers input={false} options={answer.options} key={index} />
    </div>
  ));
};

export default Quistion;
