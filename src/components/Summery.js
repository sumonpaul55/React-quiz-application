import React from "react";
import resultImg from "../assets/images/success.png";
import classes from "../Styels/summery.module.css";

const Summery = ({ score, noq }) => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={resultImg} alt="Success" />
      </div>
    </div>
  );
};

export default Summery;
