import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Videos from "../Videos/Videos";

import { useYoutubeApi } from "../../context/YoutubeApiContext";

function Home() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword || ""],
    queryFn: async () => youtube.search(keyword),
  });

  return (
    <div className="bg-black">
      {isLoading && <p className="text-white">LOADING....</p>}
      {error && <p className="text-white">SOMETHING WRONG....</p>}
      {!videos && "EMPTY"}
      {videos && <Videos videos={videos} />}
    </div>
  );
}

export default Home;
