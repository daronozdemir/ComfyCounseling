import React, { useEffect, useRef, useState } from "react";
import { Logger } from "sass";
import axios from "axios";
import counseler from "../../assets/Counseler.png";
import loui from "../../assets/Loui.png";
import { Configuration, OpenAIApi } from "openai";

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
    { text: "Hello, how can I help you?", isUser: false, date: new Date() },
  ]);
  const [disabled, setdisabled] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const scrollDown = () => {
    setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.scrollBy(0, elementRef.current.scrollHeight);
      }
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInput && userInput.trim().length !== 0 && !disabled) {
      setUserInput("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, isUser: true, date: new Date() },
      ]);
      scrollDown();

      setdisabled(true);

      await new Promise((res) => setTimeout(res, 1000));

      let data: string = await fetchData(userInput);

      replaceWithBr(data);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data, isUser: false, date: new Date() },
      ]);

      setdisabled(false);
    }
    scrollDown();
  };

  const replaceWithBr = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  const fetchData = async (userInput: string): Promise<string> => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    let response: string;

    return openai
      .createCompletion({
        model: "text-davinci-003",
        prompt:
          "I need some mental health advise on the following topic: " +
          userInput,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((res) =>
        // (res) => console.log(res)
        res.data.choices[0].text != undefined
          ? (response = res.data.choices[0].text)
          : (response = "Sorry, something went wrong")
      );
  };

  return (
    <div className="text-base-100 card bg-secondary shadow-xl mx-auto w-[75%] p-8 h-[80%] mt-10">
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
                <div className="chat-header">Botty</div>
                <div className="chat-bubble bg-accent">{message.text}</div>
                <div className="chat-footer opacity-50">
                  Send at at{" "}
                  {`${message.date.getHours()} : ${message.date.getMinutes()}`}
                </div>
              </div>
            ) : (
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={loui} />
                  </div>
                </div>
                <div className="chat-header">usery</div>
                <div className="chat-bubble bg-info">{message.text}</div>
                <div className="chat-footer opacity-50">
                  Send at at{" "}
                  {`${message.date.getHours()} : ${message.date.getMinutes()}`}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <form className="mt-5 w-full flex justify-end" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tell me your story"
          value={userInput}
          onChange={handleChange}
          className="input input-bordered text-white input-primary w-full"
        />
        <button type="submit" className="btn btn-primary  ml-5">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
