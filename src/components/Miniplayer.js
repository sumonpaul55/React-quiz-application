import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../Styels/miniplayer.module.css";

const Miniplayer = ({ title, id }) => {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

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
      <ReactPlayer url={videoUrl} width="300px" height="168px" playing={status} controls />
      {/* <img src="https://img.youtube.com/vi/qImH1bFubW4/1.jpg" alt="" /> */}
      <p>{title}</p>
    </div>
  );
};

export default Miniplayer;
