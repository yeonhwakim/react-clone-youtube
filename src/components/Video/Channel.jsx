import React from "react";

import { useQuery } from "@tanstack/react-query";

import { useYoutubeApi } from "../../context/YoutubeApiContext";

function Channel({ channelId, handleClick }) {
  const { youtube } = useYoutubeApi();

  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: async () => await youtube.channel(channelId),
  });

  return (
    channel && (
      <div
        className="flex flex-row items-center py-3"
        onClick={() => handleClick(channelId)}
      >
        <img
          className="rounded-full h-10"
          src={channel.thumbnails.default.url}
          alt={channel.title}
        />
        <span className="text-white px-3 font-midium ">{channel.title}</span>
      </div>
    )
  );
}

export default Channel;
