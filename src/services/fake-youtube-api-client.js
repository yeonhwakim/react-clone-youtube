import axios from "axios";

export default class FakeYoutubeApiClient {
  async related({ params }) {
    return axios.get(`/data/related-${params.relatedToVideoId}-videos.json`);
  }

  async channel({ params }) {
    return axios.get(`/data/channel-${params.id}.json`);
  }

  async search({ params }) {
    return axios.get(`/data/search-${params.q}-videos.json`);
  }

  async videos() {
    return axios.get(`/data/most-popular-videos.json`);
  }
}
