import React from "react";

class Headers extends React.Component {
  constructor() {
    super();
    this.state = {
      date: 1,
      photo: "off",
      backGround: "#bdc3c9"
    };
  }

  tambah() {
    let now = this.state.date;
    this.setState({
      date: now + 1
    });
  }

  kurang() {
    let now = this.state.date;
    if (this.state.date > 0) {
      this.setState({
        date: now - 1
      });
    }
  }

  togglePhoto() {
    if (this.state.photo === "off") {
      this.setState({
        photo: "on"
      });
    } else {
      this.setState({
        photo: "off"
      });
    }
  }

  titleClicked() {
    if (this.state.backGround === "#bdc3c9") {
      this.setState({
        backGround: "#bd0000"
      });
    } else {
      this.setState({
        backGround: "#bdc3c9"
      });
    }
  }

  render() {
    return (
      <div>
        <div
          className="header"
          style={{ backgroundColor: this.state.backGround }}
        >
          {this.state.photo === "on" ? (
            <div className="photo-paper" onClick={() => this.togglePhoto()}>
              <img
                src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Smiley face"
                width="200"
                height="200"
                className="image-photo"
              />
            </div>
          ) : (
            <div className="photo-paper" onClick={() => this.togglePhoto()} />
          )}
          <div className="head-desc">
            <div className="head-title" onClick={() => this.titleClicked()}>
              <h4>Hacktiv8 Meetup</h4>
            </div>
            <div className="head-desc-content">
              <div className="head-desc-left">
                <p>Location</p>
                <p>Member</p>
                <p>Organizer</p>
              </div>
              <div className="head-desc-right">
                <p>: Jakarta, Indonesia</p>
                <p>: 1,078</p>
                <p>: Adhy Wiranata</p>
              </div>
            </div>
            <button className="head-button" onClick={() => this.tambah()}>
              Tambah
            </button>
            <button className="head-button" onClick={() => this.kurang()}>
              Kurang
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Headers;
