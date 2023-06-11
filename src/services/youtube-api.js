export default class YoutubeApi {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword
      ? this.#searchByKeyword(keyword)
      : this.#mostPopular(keyword);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
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

  async #mostPopular() {
    return this.apiClient
      .videos({
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
