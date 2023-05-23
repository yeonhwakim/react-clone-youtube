import React from "react";

function VideoPlayBox({ video }) {
  const {
    id,
    snippet: {
      title,
      channelTitle,
      localized: { description },
    },
  } = video;
  return (
    <div>
      <iframe
        width="980"
        height="551"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <span>{title}</span>
        <div>
          <img src="" alt="" />
          <span>{channelTitle}</span>
        </div>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default VideoPlayBox;
