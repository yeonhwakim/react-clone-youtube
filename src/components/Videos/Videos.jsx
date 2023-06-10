import React from "react";
import Video from "../Video/Video";

function Videos({ type, videos, handleClickVideo }) {
  return (
    <ul
      className={
        type === "related"
          ? "flex flex-col w-1/5 pr-10"
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols5 gap-2"
      }
    >
      {videos.map(
        ({
          id,
          snippet: {
            thumbnails: {
              medium: { url },
            },
            title,
            publishedAt,
            channelId,
            channelTitle,
          },
        }) => (
          <Video
            key={typeof id === "string" ? id : id.videoId || id.channelId}
            type={type}
            id={typeof id === "string" ? id : id.videoId || ""}
            url={url}
            title={title}
            channelTitle={channelTitle}
            publishedAt={publishedAt}
            channelId={channelId}
            handleClickVideo={handleClickVideo}
          />
        )
      )}
    </ul>
  );
}

export default Videos;
