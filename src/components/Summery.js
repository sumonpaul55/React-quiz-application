import React from "react";
import resultImg from "../assets/images/success.png";
import classes from "../Styels/summery.module.css";

const Summery = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={resultImg} alt="Success" />
      </div>
    </div>
  );
};

export default Summery;
