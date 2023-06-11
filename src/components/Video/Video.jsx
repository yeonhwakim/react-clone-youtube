import React from "react";

import { useNavigate } from "react-router-dom";

import { diffDate } from "../../utils/date";

function Video({ video }) {
  const navigate = useNavigate();
  const {
    id,
    snippet: {
      type,
      thumbnails: {
        medium: { url },
      },
      channelId,
      title,
      channelTitle,
      publishedAt,
    },
  } = video;

  return (
    <>
      {type === "related" ? (
        <li
          className="flex flex-col"
          onClick={() =>
            navigate(`/videos/watch/${id || channelId}`, { state: { video } })
          }
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
          onClick={() =>
            navigate(`/videos/watch/${id || channelId}`, { state: { video } })
          }
        >
          <img className="w-full" src={url} alt={title} />
          <span className="line-clamp-2 text-white my-2">{title}</span>
          <span className="text-zinc-400">{channelTitle}</span>
          <span className="text-zinc-400">{diffDate(publishedAt)}</span>
        </li>
      )}
    </>
  );
}

export default Video;
