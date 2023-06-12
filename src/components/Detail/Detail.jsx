import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { useYoutubeApi } from "../../context/YoutubeApiContext";

import VideoPlayBox from "../Video/VideoPlayBox";
import Videos from "../Videos/Videos";

function Detail() {
  const navigate = useNavigate();
  const { youtube } = useYoutubeApi();

  const {
    state: { video },
  } = useLocation();

  const {
    isLoading,
    error,
    data: relatedVideos,
  } = useQuery({
    queryKey: ["related", video.id || ""],
    queryFn: async () => youtube.related(video.id),
  });

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  const handleClickChannel = (channelId) => {
    console.log(channelId);
  };

  return (
    <div className="flex flex-col lg:flex-row py-2">
      {Object.keys(video).length > 0 && (
        <VideoPlayBox video={video} handleClickChannel={handleClickChannel} />
      )}
      {isLoading && <p className="text-white">LOADING....</p>}
      {error && <p className="text-white">SOMETHING WRONG....</p>}
      {relatedVideos && (
        <Videos
          type="related"
          videos={relatedVideos}
          handleClickVideo={handleClickVideo}
        />
      )}
    </div>
  );
}

export default Detail;
