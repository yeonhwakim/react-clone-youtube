import React from "react";
import Video from "../Video/Video";

function Videos({ type, videos }) {
  return (
    <ul
      className={
        type === "related"
          ? "flex flex-col basis-2/6 gap-2 ml-3"
          : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols5 gap-2"
      }
    >
      {videos.map((video) => (
        <Video
          key={typeof video.id === "string" ? video.id : video.id.videoId}
          type={type}
          id={typeof id === "string" ? video.id : video.id.videoId || ""}
          video={video}
        />
      ))}
    </ul>
  );
}

export default Videos;
