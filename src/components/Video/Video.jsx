import React from "react";

function Video({
  url,
  channelId,
  title,
  channelTitle,
  publishedAt,
  handleClickVideo,
}) {
  const handleClick = (channelId) => {
    handleClickVideo(channelId);
  };

  return (
    <div onClick={() => handleClick(channelId)}>
      <img src={url} alt={title} />
      <span>{title}</span>
      <span>{channelTitle}</span>
      <span>{publishedAt}</span>
    </div>
  );
}

export default Video;
