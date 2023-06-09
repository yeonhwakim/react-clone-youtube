import { createContext, useContext } from "react";
import YoutubeApi from "../services/youtube-api";
import YoutubeApiClient from "../services/youtube-api-client";
import FakeYoutubeApiClient from "../services/fake-youtube-api-client";

export const YoutubeApiContext = createContext();

const youtubeClient = new YoutubeApiClient();
// const youtubeClient = new FakeYoutubeApiClient();
const youtube = new YoutubeApi(youtubeClient);

export function YoutubeApiContextProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
