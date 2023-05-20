import { useEffect, useState } from "react";

function useFetchVideos(type) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(type === "most" && "data/most-popular-videos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, [type]);

  return videos;
}

export default useFetchVideos;
