/* eslint-disable array-callback-return */
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../Hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(10);
  const { loading, error, videos } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll dataLength={videos.length} hasMore={true} next={() => setPage(page + 5)}>
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="quiz" key={video.youtubeID}>
                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <h2>Data not found</h2>}
      {error && <h2>There was an error</h2>}
      {loading && <h2>Data Loading...</h2>}
    </div>
  );
};

export default Videos;
