import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetchVideos(type) {
  const { keyword, id } = useParams();
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(
      type === "most"
        ? "/data/most-popular-videos.json"
        : type === "search"
        ? `/data/search-${keyword}-videos.json`
        : type === "related"
        ? `/data/related-${id}-videos.json`
        : `/data/detail-${id}-video.json`
    )
      .then((res) => res.json())
      .then((data) =>
        type === "detail" ? setVideo(data.items[0]) : setVideos(data.items)
      );
  }, [type, keyword, id]);

  return type === "detail" ? video : videos;
}

export default useFetchVideos;
