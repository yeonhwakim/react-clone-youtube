import { createContext, useContext } from "react";
import YoutubeApi from "../services/youtube-api";

export const YoutubeApiContext = createContext();

const youtube = new YoutubeApi();

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
