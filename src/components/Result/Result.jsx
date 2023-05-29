import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";

import Videos from "../Videos/Videos";

function Result() {
  const navigate = useNavigate();
  const target = useRef();
  const searchVideos = useFetchVideos("search");
  const [observe, unobserve] = useInfiniteScroll(() => {
    console.log("api called");
  });

  useEffect(() => {
    searchVideos.length && observe(target.current);
    return () => {
      target.current && unobserve(target.current);
    };
  });

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  return (
    <div className="bg-black">
      {!searchVideos.length && "EMPTY"}
      {searchVideos.length && (
        <Videos videos={searchVideos} handleClickVideo={handleClickVideo} />
      )}
      <div ref={target} className="bottom"></div>
    </div>
  );
}

export default Result;
