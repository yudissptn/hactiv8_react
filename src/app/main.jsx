import React from "react";
import Headers from "./components/header";
import NavBar from "./components/navbar";
import Containers from "./components/container/container";
import About from "./components/container/about";
import Member from "./components/container/member";
import Lists from "./components/container/list";
import Input from "./components/container/input";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: "",
      cardList: [
        {
          listDate: "27 November 2018",
          listDesc: "#39 JakartaJS April Meetup with kumparan",
          listNumb: "139"
        },
        {
          listDate: "27 October 2017",
          listDesc: "#38 JakartaJS April Meetup with Blibli",
          listNumb: "113"
        },
        {
          listDate: "27 November 2017",
          listDesc: "#37 JakartaJS April Meetup with Hactiv8",
          listNumb: "110"
        }
      ]
    };
  }

  getTyped(e) {
    console.log(e.target.value);
    this.setState({
      typedValue: e.target.value
    });
  }

  render() {
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

        <Input handleChange={e => this.getTyped(e)} />

        <div className="list">
          {this.state.cardList
            .filter(list => {
              return list.listDate
                .toLowerCase()
                .includes(this.state.typedValue);
            })
            .map(list => {
              return (
                <Lists
                  date={list.listDate}
                  desc={list.listDesc}
                  number={list.listNumb}
                />
              );
            })}
        </div>
        <br />
        <hr color="black" />
        <h4 align="center">Copyright Hactiv8 2019</h4>
      </div>
    );
  }
}

export default Main;
