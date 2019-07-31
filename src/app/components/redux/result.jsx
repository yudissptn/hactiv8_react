import React from "react";
import { connect } from "react-redux";

import "../../../App.css";
import { statement } from "@babel/template";

const Result = ({ countState }) => {
  return (
    <div>
      Result
      <br />
      {countState}
    </div>
  );
};

const mapStateToProps = state => {
  return { countState: state ? state.counts : 1 };
};
const c = connect(
  mapStateToProps,
  null
)(Result);
export default c;
