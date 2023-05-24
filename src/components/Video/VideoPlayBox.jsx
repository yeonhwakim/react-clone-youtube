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
        <div onClick={() => handleClick(channelId)}>
          <img src={url} alt={channelTitle} />
          <span>{channelTitle}</span>
        </div>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default VideoPlayBox;
