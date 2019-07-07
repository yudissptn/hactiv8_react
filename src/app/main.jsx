import React from "react";
import Headers from "./components/header";
import NavBar from "./components/navbar";
import Containers from "./components/container/container";
import About from "./components/container/about";
import Member from "./components/container/member";
import Lists from "./components/container/list";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Headers />
      <h3 className="sub-title">Next Meetup</h3>
      <Containers />
      <h3 className="sub-title">About Meetup</h3>
      <About />
      <div className="add-see-all">
        <h3 className="sub-title-see-all">Members</h3>
        <p className="see-all">See all</p>
      </div>
      <Member />
      <div className="add-see-all">
        <h3 className="sub-title-see-all">Past Meetups</h3>
        <p className="see-all">See all</p>
      </div>
      <Lists />
      <br />
      <hr color="black" />
      <h4 align="center">Copyright Hactiv8 2019</h4>
    </div>
  );
};

export default Main;
