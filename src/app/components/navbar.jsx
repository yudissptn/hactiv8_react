import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <h3 className="left-navbar-title">Hactiv8-React</h3>
        </Link>
        <div className="nav-link">
          <Link className="left2-navbar-title" to="/createmeetup">
            Create Meetup
          </Link>
          <Link className="left3-navbar-title" to="/explore">
            Explore
          </Link>
        </div>
        <p className="left4-navbar-title">Login</p>
      </div>
    </div>
  );
};

export default NavBar;
