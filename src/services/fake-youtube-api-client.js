import axios from "axios";

export default class FakeYoutubeApiClient {
  async search({ params }) {
    return axios.get(`/data/search-${params.q}-videos.json`);
  }

  async videos() {
    return axios.get(`/data/most-popular-videos.json`);
  }
}
