import React, { useState } from "react";
import { fetchThunk, fetchAction } from "./action";
import { connect } from "react-redux";

const Fetching = ({ fetchDispatch }) => {
  return (
    <div>
      <button onClick={() => fetchDispatch()}>Fetch</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    countState: state ? state.counts : 1
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDispatch: () => dispatch(fetchThunk())
});

const c = connect(
  null,
  mapDispatchToProps
)(Fetching);

export default c;
