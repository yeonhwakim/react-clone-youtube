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
    <li className="flex flex-col" onClick={() => handleClick(channelId)}>
      <img className="h-30" src={url} alt={title} />
      <div className="h-20 min-h-20">
        <span className="line-clamp-2 text-white">{title}</span>
      </div>
      <span className="text-zinc-400">{channelTitle}</span>
      <span className="text-zinc-400">{publishedAt}</span>
    </li>
  );
}

export default Video;
