/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "../Hooks/useVideoList";
import classes from "../Styels/videos.module.css";
import Video from "./Video";

const Videos = () => {
  const { loading, error, videos } = useVideoList(0);
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video, index) => (
          <Link to="quiz" key={index}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && videos.length === 0 && <h2>Data not found</h2>}
      {error && <h2>There was an error</h2>}
      {loading && <h2>Data Loading...</h2>}
    </div>
  );
};

export default Videos;
