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
    return console.log(error);
  }
);

export function mostPopularVideosApi() {
  return request
    .get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "KR",
        type: "video",
        maxResults: "25",
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function nextVideosApi(pageToken) {
  console.log("????");
  return request
    .get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "KR",
        type: "video",
        maxResults: "25",
        pageToken,
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function searchVideosApi(q) {
  return request
    .get("search", {
      params: {
        part: "snippet",
        q,
        regionCode: "KR",
        type: "video",
        maxResults: "25",
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function relatedVideosApi(relatedToVideoId) {
  return request
    .get("search", {
      params: {
        part: "snippet",
        relatedToVideoId,
        regionCode: "KR",
        type: "video",
        maxResults: "25",
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function detailVideoApi(id) {
  return request
    .get("videos", {
      params: {
        part: "snippet",
        id,
        regionCode: "KR",
        type: "video",
        maxResults: "25",
        key: "AIzaSyBICiuwe3oayhRn06oC-n94pKxhH5kSLgQ",
      },
    })
    .then(function (response) {
      return response.data;
    });
}
