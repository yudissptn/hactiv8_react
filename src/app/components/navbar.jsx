import React from "react";

class NavBar extends React.Component {
  meetUpClicked() {
    console.log("meetup clicked");
  }

  exploreClicked() {
    console.log("explore clicked");
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <h3 className="left-navbar-title">Hactiv8-React</h3>
          <div className="nav-link">
            <div onClick={() => this.meetUpClicked()}>
              <p className="left2-navbar-title">Create Meetup</p>
            </div>
            <div onClick={() => this.exploreClicked()}>
              <p className="left3-navbar-title">Explore</p>
            </div>
          </div>
          <p className="left4-navbar-title">Login</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
