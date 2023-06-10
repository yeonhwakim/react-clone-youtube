import React, { useState } from "react";

function VideoPlayBox({ video, channel, handleClickChannel }) {
  const {
    id,
    snippet: {
      title,
      localized: { description },
    },
  } = video;
  const {
    id: channelId,
    snippet: {
      title: channelTitle,
      thumbnails: {
        high: { url },
      },
    },
  } = channel;

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
        <div
          className="flex flex-row items-center py-3"
          onClick={() => handleClick(channelId)}
        >
          <img className="h-10" src={url} alt={channelTitle} />
          <span className="text-zinc-400 px-3">{channelTitle}</span>
        </div>
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
