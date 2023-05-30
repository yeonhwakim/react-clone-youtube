import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";

import Videos from "../Videos/Videos";
import {
  mostPopularVideosApi,
  mostPopularVideosTestApi,
} from "../../services/videos";

function Home() {
  const navigate = useNavigate();
  const target = useRef();
  const mostPopularVideos = useFetchVideos("most");
  const [observe, unobserve] = useInfiniteScroll(() => {
    console.log("api called");
  });

  useEffect(() => {
    // const data = mostPopularVideosTestApi();
    // console.log(data);
    mostPopularVideos.length && observe(target.current);
    return () => {
      target.current && unobserve(target.current);
    };
  });

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
      <div ref={target} className="bottom"></div>
    </div>
  );
}

export default Home;
