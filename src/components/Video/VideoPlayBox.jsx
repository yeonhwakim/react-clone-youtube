import React, { useState } from "react";

import Channel from "./Channel";

function VideoPlayBox({ video, handleClickChannel }) {
  const {
    id,
    snippet: { title, description, channelId },
  } = video;
  const [more, setMore] = useState(false);

  const handleClick = (channelId) => {
    handleClickChannel(channelId);
  };

  const handleClickMore = () => {
    setMore(!more);
  };

  return (
    <div className="w-4/5 px-10">
      <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <span>{title}</span>
        <Channel channelId={channelId} handleClick={handleClick} />
        <div>
          <span className={more ? "text-white" : "line-clamp-2 text-white"}>
            {description}
          </span>
          <button className="text-white" onClick={handleClickMore}>
            {more ? "close" : "more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayBox;
