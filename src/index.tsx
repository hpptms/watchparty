import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App";
import reportWebvitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from"@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebvitals();
