import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Chatbot from "../Chat/ChatBot";
import "./Navigation.scss";

const Navigation = () => {
  const Layout = () => {
    return (
      <nav className="navbar rounded bg-primary">
        <div className="flex-1">
          <Link
            to="/"
            className="btn bg-base-100 btn-ghost normal-case text-xl"
          >
            Home
          </Link>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1 gap-2">
            <div className="content-center">
              <Link
                to="/analytics"
                className="w-24 bg-base-100 btn btn-square btn-ghost"
              >
                Analytics
              </Link>
            </div>
            <div>
              <Link to="/profile" className="btn btn-ghost btn-circle avatar">
                <div className="w-20 rounded-full">
                  <img src="https://www.w3schools.com/howto/img_avatar.png" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  function Home() {
    return (
      <div className="">
        <h2>Home</h2>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }

  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
