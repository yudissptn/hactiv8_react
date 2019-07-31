import React from "react";
import { connect } from "react-redux";

import "../../../App.css";
import { incAction, decAction } from "./action";
import { statement } from "@babel/template";

const Command = ({ inc, dec, decrement, increment, countState }) => {
  return (
    <div>
      {/* <button onClick={() => dec()}>-</button>
      <button onClick={() => inc()}>+</button> */}
      <button onClick={() => decrement(countState - 1)}>-</button>
      <button onClick={() => increment(countState + 1)}>+</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    countState: state ? state.counts : 1
  };
};

const mapDispatchToProps = dispatch => ({
  decrement: e => dispatch(decAction(e)),
  increment: e => dispatch(incAction(e))
});

const c = connect(
  mapStateToProps,
  mapDispatchToProps
)(Command);

export default c;
