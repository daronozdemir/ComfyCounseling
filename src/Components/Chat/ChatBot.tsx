import React, { useEffect, useRef, useState } from "react";
import { Logger } from "sass";
import "./Chatbot.scss";
import axios from "axios";
import counseler from "../../assets/Counseler.png";

export interface BoredInterface {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

const Chatbot: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", isUser: false },
  ]);
  const [disabled, setdisabled] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInput && userInput.trim().length !== 0 && !disabled) {
      setUserInput("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, isUser: true, loading: true },
      ]);
      setdisabled(true);
      setTimeout(() => {}, 2000);

      let data: string = await fetchData(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data, isUser: false, loading: false },
      ]);

      setdisabled(false);
    }

    setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.scrollBy(0, elementRef.current.scrollHeight);
      }
    }, 0);
  };

  const fetchData = async (userInput: string): Promise<string> => {
    try {
      const response = await axios.get<BoredInterface>(
        "https://www.boredapi.com/api/activity/"
      );
      return response.data.activity;
    } catch (error: any) {
      return error;
    }
  };

  return (
    <div className="text-base-100 card bg-secondary shadow-xl mx-auto p-8 h-[80%] mt-10">
      <h2 className="card-title  m-auto mb-10">Your comfy counseler</h2>
      <div ref={elementRef} className="scroller h-full flex flex-col ">
        {/* move this to seperate Components */}
        {messages.map((message, index) => (
          <div key={index}>
            {!message.isUser ? (
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={counseler} />
                  </div>
                </div>
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-accent">{message.text}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            ) : (
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" />
                  </div>
                </div>
                <div className="chat-header">
                  Anakin
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-info">{message.text}</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tell me your story"
          value={userInput}
          onChange={handleChange}
          className="input input-bordered text-white input-primary w-[80%]"
        />
        <button type="submit" className="btn btn-primary  ml-5">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
