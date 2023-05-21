import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetchVideos(type) {
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      type === "most"
        ? "/data/most-popular-videos.json"
        : type === "search"
        ? `/data/search-${keyword}-videos.json`
        : ""
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, [type, keyword]);

  return videos;
}

export default useFetchVideos;
