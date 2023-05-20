import React from "react";

import { useNavigate } from "react-router-dom";

import useFetchVideos from "../../hooks/use-fetch-videos";

import Video from "../Video/Video";

function Home() {
  const navigate = useNavigate();
  const mostPopularVideos = useFetchVideos("most");

  const handleClickVideo = (id) => {
    navigate(`/videos/watch/${id}`);
  };

  return (
    <div className="bg-black">
      {!mostPopularVideos.length && "EMPTY"}
      {mostPopularVideos.length && (
        <ul className="grid grid-cols-4 gap-4">
          {mostPopularVideos.map(
            ({
              id,
              snippet: {
                thumbnails: {
                  high: { url },
                },
                title,
                publishedAt,
                channelId,
                channelTitle,
              },
            }) => (
              <li key={id}>
                <Video
                  url={url}
                  title={title}
                  channelTitle={channelTitle}
                  publishedAt={publishedAt}
                  channelId={channelId}
                  handleClickVideo={handleClickVideo}
                />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default Home;
