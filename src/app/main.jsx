import React from "react";
import { Provider } from "react-redux";

import NavBar from "./components/navbar";
import CreateMeetup from "./components/create_meetup";
import Explore from "./components/explore";
import Home from "./components/home";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/createmeetup" component={CreateMeetup} />
        <Route path="/explore" component={Explore} />
      </Router>
    </div>
  );
};

export default Main;
