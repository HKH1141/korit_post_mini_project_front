import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
        retry: 0,
        },
    },
});
createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Global styles={global} />
            <App />
        </BrowserRouter>
    </QueryClientProvider>
);
