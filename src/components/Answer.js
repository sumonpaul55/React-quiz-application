import React, { Fragment } from "react";
import classes from "../Styels/answer.module.css";
import Checkbox from "./Checkbox";
const Answer = ({ options = [], handleAnswerchange, input }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox key={index} className={classes.answer} text={option.title} vlaue={index} checked={option.checked} onChange={(e) => handleAnswerchange(e, index)} />
          ) : (
            <Checkbox
              key={index}
              className={`${classes.answer} ${option.correct ? classes.correct : options.checked ? classes.wrong : null}`}
              text={option.title}
              disabled
              defaultChecked={option.checked}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answer;
