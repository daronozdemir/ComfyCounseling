import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import About from "../Pages/About/About";
import App from "./App";
import Chatbot from "./Components/Chat/ChatBot";
import "./index.css";
import Navigation from "./Components/Navigation/Navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
