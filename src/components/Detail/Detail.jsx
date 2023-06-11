import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";
import useFetchChannel from "../../hooks/use-fetch-channel";

import VideoPlayBox from "../Video/VideoPlayBox";
import Videos from "../Videos/Videos";

function Detail() {
  const navigate = useNavigate();
  const {
    state: { video },
  } = useLocation();

  const relatedVideos = useFetchVideos("related");
  const channel = useFetchChannel(video?.snippet?.channelId);

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  const handleClickChannel = (channelId) => {
    console.log(channelId);
  };

  return (
    <div className="bg-black flex flex-row">
      {Object.keys(video).length > 0 && Object.keys(channel).length > 0 && (
        <VideoPlayBox
          video={video}
          channel={channel}
          handleClickChannel={handleClickChannel}
        />
      )}
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
