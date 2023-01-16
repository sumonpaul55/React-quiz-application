import React from "react";
import signupimg from "../assets/images/signup.svg";
import classes from "../Styels/illustration.module.css";
const Illustration = () => {
  return (
    <>
      <div className={classes.illustration}>
        <img src={signupimg} alt="Signup" />
      </div>
    </>
  );
};

export default Illustration;
