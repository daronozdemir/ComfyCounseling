import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Chatbot from "./Components/Chat/ChatBot";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Chat host="localhost" port={5505} useHttps={true} />
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
