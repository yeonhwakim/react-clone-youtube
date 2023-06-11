import axios from "axios";

export default class FakeYoutubeApiClient {
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
