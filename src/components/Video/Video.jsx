import React from "react";

function Video({ url, title, channelTitle, publishedAt }) {
  return (
    <div>
      <img src={url} alt={title} />
      <span>{title}</span>
      <span>{channelTitle}</span>
      <span>{publishedAt}</span>
    </div>
  );
}

export default Video;
