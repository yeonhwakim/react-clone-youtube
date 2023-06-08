import axios from "axios";

export default class FakeYoutubeApi {
  constructor() {}

  async search(keyword) {
    return keyword
      ? this.#searchByKeywordVideos(keyword)
      : this.#mostPopularVideos();
  }

  async #searchByKeywordVideos(keyword) {
    return axios
      .get(`/data/search-${keyword}-videos.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => ({
          ...item,
          id: item.id.videoId || item.id.channelId,
        }))
      );
  }
  async #mostPopularVideos() {
    return axios
      .get(`/data/most-popular-videos.json`)
      .then((res) => res.data.items);
  }
}
