import React, { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import useInfiniteScroll from "../../hooks/use-infinite-scroll";

import Videos from "../Videos/Videos";

import FakeYoutube from "../../services/fake-youtube-api";
import Youtube from "../../services/youtube-api";
import { mostPopularVideosApi, nextVideosApi } from "../../services/videos";

function Home() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword || ""],
    queryFn: async () => {
      // const fakeYoutube = new Youtube();
      // return fakeYoutube.search(keyword);
      const youtube = new Youtube();
      return youtube.search(keyword);
    },
  });

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

  // useEffect(() => {
  //   unobserve(target.current);
  //   mostPopularVideos.length > 0 && nextVideosToken && observe(target.current);
  //   return () => {
  //     target.current && unobserve(target.current);
  //   };
  // }, [mostPopularVideos, nextVideosToken]);

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  return (
    <div className="bg-black">
      {isLoading && <p className="text-white">LOADING....</p>}
      {error && <p className="text-white">SOMETHING WRONG....</p>}
      {!videos && "EMPTY"}
      {videos && <Videos videos={videos} handleClickVideo={handleClickVideo} />}
      <div ref={target} className="bottom"></div>
    </div>
  );
}

export default Home;
