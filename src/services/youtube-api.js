import axios from "axios";

export default class YoutubeApi {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword
      ? this.#searchByKeywordVideos(keyword)
      : this.#mostPopularVideos();
  }

  async #searchByKeywordVideos(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          q: keyword,
          regionCode: "KR",
          type: "video",
          maxResults: "25",
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => ({
          ...item,
          id: item.id.videoId || item.id.channelId,
        }))
      );
  }
  async #mostPopularVideos() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "KR",
          type: "video",
          maxResults: "25",
        },
      })
      .then((res) => res.data.items);
  }
}
