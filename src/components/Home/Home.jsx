import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import useInfiniteScroll from "../../hooks/use-infinite-scroll";

import Videos from "../Videos/Videos";
import { mostPopularVideosApi, nextVideosApi } from "../../services/videos";

function Home() {
  const navigate = useNavigate();
  const target = useRef();
  const [listInfo, setListInfo] = useState({
    mostPopularVideos: [],
    nextVideosToken: "",
  });
  const { mostPopularVideos, nextVideosToken } = listInfo;
  const [observe, unobserve] = useInfiniteScroll(async () => {
    await fetchNext(nextVideosToken);
    // setMostPopularVideos([...mostPopularVideos, ...data?.items]);
  });

  const fetchNext = async (token) => {
    const data = await nextVideosApi(token);
    setListInfo({
      ...listInfo,
      nextVideosToken: data.nextPageToken,
      mostPopularVideos: data.items,
    });
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await mostPopularVideosApi();
      setListInfo({
        ...listInfo,
        nextVideosToken: data.nextPageToken,
        mostPopularVideos: data.items,
      });
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    unobserve(target.current);
    mostPopularVideos.length > 0 && nextVideosToken && observe(target.current);
    return () => {
      target.current && unobserve(target.current);
    };
  }, [mostPopularVideos, nextVideosToken]);

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
