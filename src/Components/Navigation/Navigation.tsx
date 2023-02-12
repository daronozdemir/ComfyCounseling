import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Chatbot from "../Chat/ChatBot";
import "./Navigation.scss";
import loui from "../../assets/Loui.png";
import About from "../../../Pages/About/About";
import ErrorPage from "../../../Pages/Error/ErrorPage";
import Analytics from "../../../Pages/Analytics/Analytics";
import Profile from "../../../Pages/Profile/Profile";

const Navigation = () => {
  return (
    <>
      <nav className="navbar rounded bg-primary ">
        <div className="gap-3 mx-auto w-[75%]">
          <div className="flex">
            <Link
              to="/"
              className="w-24 px-2 bg-base-100 hover:text-base-100 btn normal-case text-xl btn-square"
            >
              Chat
            </Link>
          </div>
          <div className="content-center">
            <Link
              to="/analytics"
              className="w-24 px-2 bg-base-100 hover:text-base-100 btn normal-case text-xl btn-square  "
            >
              Analytics
            </Link>
          </div>
          <div className="content-center">
            <Link
              to="/about"
              className="w-24 px-2 bg-base-100 hover:text-base-100 btn normal-case text-xl btn-square  "
            >
              About
            </Link>
          </div>
          <div className="ml-auto">
            <div className="menu menu-horizontal px-1 gap-2">
              <div>
                <Link to="/profile" className="btn btn-ghost btn-circle avatar">
                  <div className="w-20 rounded-full">
                    <img src={loui} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/">
          <Route index element={<Chatbot />} />
          <Route path="about" element={<About />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
