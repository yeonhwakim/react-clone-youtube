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
    <>
      {!mostPopularVideos.length && "EMPTY"}
      {mostPopularVideos.length && (
        <ul>
          {mostPopularVideos.map(
            ({
              id,
              snippet: {
                thumbnails: {
                  default: { url },
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
    </>
  );
}

export default Home;
