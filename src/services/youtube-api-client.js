import axios from "axios";

export default class YoutubeApiClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async related(params) {
    return this.httpClient.get("search", params);
  }

  async channel(params) {
    return this.httpClient.get("channels", params);
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }
}
