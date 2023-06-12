import React from "react";

import Channel from "./Channel";

function VideoPlayBox({ video, handleClickChannel }) {
  const {
    id,
    snippet: { title, description, channelId },
  } = video;

  const handleClick = (channelId) => {
    handleClickChannel(channelId);
  };

  return (
    <div className="basis-4/6">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="py-4">
        <span className="text-white text-xl font-bold">{title}</span>
        <Channel channelId={channelId} handleClick={handleClick} />
        <pre className="whitespace-pre-wrap text-white">{description}</pre>
      </div>
    </div>
  );
}

export default VideoPlayBox;
