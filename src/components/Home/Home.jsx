import React from "react";

import useFetchVideos from "../../hooks/use-fetch-videos";

import Video from "../Video/Video";

function Home() {
  const mostPopularVideos = useFetchVideos("most");

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
