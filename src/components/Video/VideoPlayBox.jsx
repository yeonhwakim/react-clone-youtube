import React from "react";

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

  const handleClick = (channelId) => {
    handleClickChannel(channelId);
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
        <span className="line-clamp-2 text-white">{description}</span>
      </div>
    </div>
  );
}

export default VideoPlayBox;
