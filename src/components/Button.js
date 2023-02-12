import React from "react";
import classes from "../Styels/button.module.css";

const Button = ({ className, children, type, ...rest }) => {
  return (
    <button className={`${classes.button} ${className}`} {...rest} type={type}>
      {children}
    </button>
  );
};

export default Button;
