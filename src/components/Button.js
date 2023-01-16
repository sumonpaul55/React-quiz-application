import React from "react";
import classes from "../Styels/button.module.css";

const Button = ({ children }) => {
  return (
    <button className={classes.button}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
