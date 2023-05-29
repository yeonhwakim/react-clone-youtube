import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetchNextVideos() {
  const { keyword, nextToken } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`/data/search-${keyword}-${nextToken}-videos.json`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, [keyword, nextToken]);

  return videos;
}

export default useFetchNextVideos;
