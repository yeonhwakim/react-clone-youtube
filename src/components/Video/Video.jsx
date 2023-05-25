import React from "react";
import { diffDate } from "../../utils/date";

function Video({
  type,
  id,
  url,
  channelId,
  title,
  channelTitle,
  publishedAt,
  handleClickVideo,
}) {
  const handleClick = (id) => {
    handleClickVideo(id);
  };

  return (
    <>
      {type === "related" ? (
        <li
          className="flex flex-col"
          onClick={() => handleClick(id || channelId)}
        >
          <img src={url} alt={title} />
          <div className="h-20 min-h-20">
            <span className="line-clamp-2 text-white">{title}</span>
          </div>
          <span className="text-zinc-400">{channelTitle}</span>
          <span className="text-zinc-400">{diffDate(publishedAt)}</span>
        </li>
      ) : (
        <li
          className="flex flex-col"
          onClick={() => handleClick(id || channelId)}
        >
          <img className="h-30" src={url} alt={title} />
          <div className="h-20 min-h-20">
            <span className="line-clamp-2 text-white">{title}</span>
          </div>
          <span className="text-zinc-400">{channelTitle}</span>
          <span className="text-zinc-400">{diffDate(publishedAt)}</span>
        </li>
      )}
    </>
  );
}

export default Video;
