/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "../Hooks/useVideoList";
import classes from "../Styels/videos.module.css";
import Video from "./Video";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => {
          <Link to="quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>;
        })}
      {!loading && videos.length === 0(<h1>data not found</h1>)}
      {error && <h1>Ther was an problem</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default Videos;
