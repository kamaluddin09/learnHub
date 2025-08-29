import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

const clientId = "101819691291-ej3b9np2co1u2lojan57ri7a705f5667.apps.googleusercontent.com"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
