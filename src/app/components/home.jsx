import React from "react";
import axios from "axios";

import Headers from "./header";
import NavBar from "./navbar";
import Containers from "./container/container";
import About from "./container/about";
import Member from "./container/member";
import Lists from "./container/list";
import Input from "./container/input";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: "",
      currentPage: 1,
      totalData: 0,
      testData: []
    };
  }

  getTyped(e) {
    console.log(e.target.value);
    this.setState({
      typedValue: e.target.value
    });
  }

  componentWillMount() {
    console.log("aku will mount");
    this.requestPage(1);
  }

  componentDidMount() {
    console.log("aku did mount");
  }

  fetching() {
    let opt = {
      method: "GET",
      url: "https://swapi.co/api/people/?page=1"
    };
    axios(opt)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          testData: data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  requestPage(pageNumber) {
    let opt = {
      method: "GET",
      url: `https://swapi.co/api/people/?page=${pageNumber}`
    };
    axios(opt)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          testData: data.results,
          currentPage: pageNumber,
          totalData: data.count
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.testData);
    let totalPage = Math.round(
      this.state.totalData / this.state.testData.length
    );

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(this.state.totalData / 10); i++) {
      pageNumber.push(i);
    }

    let renderPageNumbers = pageNumber.map(number => {
      let classes = this.state.currentPage === number ? "active" : "";

      return (
        <span
          key={number}
          className={classes}
          onClick={() => this.requestPage(number)}
        >
          {number}
        </span>
      );
    });
    console.log(totalPage);
    return (
      <div>
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
        </div>

        <Input handleChange={e => this.getTyped(e)} />

        <div className="list">
          {this.state.testData.length > 0 ? (
            this.state.testData
              .filter(list => {
                return list.name.toLowerCase().includes(this.state.typedValue);
              })
              .map(list => {
                return (
                  <Lists
                    date={list.name}
                    desc={list.homeworld}
                    number={list.skin_color}
                  />
                );
              })
          ) : (
            <h4>Loading</h4>
          )}
        </div>

        <div className="pagination">
          {this.state.currentPage > 1 ? (
            <span onClick={() => this.requestPage(this.state.currentPage - 1)}>
              &laquo;
            </span>
          ) : (
            ""
          )}
          {renderPageNumbers}
          {this.state.currentPage < 9 ? (
            <span onClick={() => this.requestPage(this.state.currentPage + 1)}>
              &raquo;
            </span>
          ) : (
            ""
          )}
        </div>

        <br />
        <br />
        <br />
        <hr color="black" />
        <h4 align="center">Copyright Hactiv8 2019</h4>
        {/* <Route exact path="/" component={Main} /> */}
      </div>
    );
  }
}

export default Main;
