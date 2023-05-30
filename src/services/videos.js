import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  timeout: 1000,
  headers: { Accept: "application/json" },
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return console.log("common error");
  }
);

export function mostPopularVideosTestApi() {
  axios
    .get(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&type=video&regionCode=US&key=AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ"
    )
    .then(function (response) {
      return console.log(response.data);
    });
}

export function mostPopularVideosApi() {
  request
    .get("videos", {
      params: {
        part: "snippet%2CcontentDetails%2Cstatistics",
        chart: "mostPopular",
        regionCode: "KR",
        maxResults: "25",
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function searchKeywordVideosApi({ keyword: q }) {
  request
    .get("search", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "KR",
        maxResults: "25",
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
        q,
      },
    })
    .then(function (response) {
      return response.data;
    });
}
