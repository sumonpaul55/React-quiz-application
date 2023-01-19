import React from "react";
import image from "./../assets/images/3.jpg";
import classes from "./../Styels/video.module.css";

const Video = () => {
  return (
    <div className={classes.video}>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
};

export default Video;
