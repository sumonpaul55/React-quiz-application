import React from "react";
import classes from "../Styels/form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form action="#" className={`${className} ${classes.form}`}>
      {children}
    </form>
  );
};

export default Form;
