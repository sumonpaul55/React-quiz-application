import React from "react";
import classes from "../Styels/button.module.css";

const Button = ({ className, children }) => {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
};

export default Button;
