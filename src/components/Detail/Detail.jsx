import React from "react";

import { Navigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";

import VideoPlayBox from "../Video/VideoPlayBox";
import Videos from "../Videos/Videos";

function Detail() {
  const relatedVideos = useFetchVideos("related");
  const video = useFetchVideos("detail");

  const handleClickVideo = (id) => {
    Navigate(`/videos/watch/${id}`);
  };

  return (
    <div>
      {Object.keys(video).length > 0 && <VideoPlayBox video={video} />}
      {relatedVideos && (
        <Videos videos={relatedVideos} handleClickVideo={handleClickVideo} />
      )}
    </div>
  );
}

export default Detail;
