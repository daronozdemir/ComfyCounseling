import React, { useState } from "react";
import "./Chatbot.scss";

const Chatbot: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", isUser: false },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { text: userInput, isUser: true }]);
    const data = await fetchData(userInput);
    setMessages([...messages, { text: data, isUser: false }]);
    setUserInput("");
  };

  async function fetchData(userInput: string) {
    // const response = await fetch(`/chatbot?input=${userInput}`);
    // const data = await response.json();
    // return data.response;
    setTimeout(() => {}, 2000);

    return "data" + Math.random();
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-conversation">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${
              message.isUser ? "user-message" : "bot-message"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here"
          value={userInput}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
