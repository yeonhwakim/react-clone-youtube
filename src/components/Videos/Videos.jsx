import React from "react";
import Video from "../Video/Video";

function Videos({ videos, handleClickVideo }) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {videos.map(
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
          <Video
            key={id}
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
