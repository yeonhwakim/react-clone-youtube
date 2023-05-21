import React from "react";

import { useNavigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";

import Videos from "../Videos/Videos";

function Result() {
  const navigate = useNavigate();
  const searchVideos = useFetchVideos("search");

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  return (
    <div className="bg-black">
      {!searchVideos.length && "EMPTY"}
      {searchVideos.length && (
        <Videos videos={searchVideos} handleClickVideo={handleClickVideo} />
      )}
    </div>
  );
}

export default Result;
