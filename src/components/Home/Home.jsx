import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import useInfiniteScroll from "../../hooks/use-infinite-scroll";

import Videos from "../Videos/Videos";
import { mostPopularVideosApi, nextVideosApi } from "../../services/videos";

function Home() {
  const navigate = useNavigate();
  const target = useRef();
  const [mostPopularVideos, setMostPopularVideos] = useState([]);
  const [nextVideosToken, setNextVideosToken] = useState([]);
  const [observe, unobserve] = useInfiniteScroll(async () => {
    console.log("????????????");
    // const data = await nextVideosApi(nextVideosToken);
    // console.log(data);
    // setMostPopularVideos([...mostPopularVideos, ...data?.items]);
  });

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await mostPopularVideosApi();
      console.log(data);
      setMostPopularVideos(data?.items);
      setNextVideosToken(data?.nextPageToken);
    };
    fetchVideos();
  }, []);

  useEffect(() => {
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
