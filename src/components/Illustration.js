import React from "react";
import classes from "../Styels/illustration.module.css";

const Illustration = ({ src, altText }) => {
  return (
    <>
      <div className={classes.illustration}>
        <img src={src} alt={altText} />
      </div>
    </>
  );
};

export default Illustration;
