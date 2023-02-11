import React, { useRef, useState } from "react";
import playerImg from "../assets/images/3.jpg";
import classes from "../Styels/miniplayer.module.css";

const Miniplayer = () => {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  function toggleminiPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef} onClick={toggleminiPlayer}>
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span className={`material-icons-outlined ${classes.close}`} onClick={toggleminiPlayer}>
        {" "}
        close{" "}
      </span>
      <img src={playerImg} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default Miniplayer;
