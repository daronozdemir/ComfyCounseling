import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Chatbot from "./Components/Chat/ChatBot";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/Error/ErrorPage";

function App() {
  return (
    <div className="App h-screen">
      <Navigation />
    </div>
  );
}

export default App;
