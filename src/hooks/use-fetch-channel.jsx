import { useEffect, useState } from "react";

function useFetchVideos(channelId) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    fetch(`/data/channel-${channelId}.json`)
      .then((res) => res.json())
      .then((data) => setChannel(data.items[0]));
  }, [channelId]);

  return channel;
}

export default useFetchVideos;
