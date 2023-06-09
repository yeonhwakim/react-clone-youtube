import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Header from "./components/Header/Header";

import "./App.css";
import { YoutubeApiContextProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header />
      <YoutubeApiContextProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiContextProvider>
    </div>
  );
}

export default App;
