import React from "react";
import classes from "../Styels/button.module.css";

const Button = ({ className, children, type }) => {
  return (
    <button className={`${classes.button} ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
