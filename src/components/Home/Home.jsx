import React from "react";

import { useNavigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";

import Videos from "../Videos/Videos";

function Home() {
  const navigate = useNavigate();
  const mostPopularVideos = useFetchVideos("most");

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  return (
    <div className="bg-black">
      {!mostPopularVideos.length && "EMPTY"}
      {mostPopularVideos.length && (
        <Videos
          videos={mostPopularVideos}
          handleClickVideo={handleClickVideo}
        />
      )}
    </div>
  );
}

export default Home;
