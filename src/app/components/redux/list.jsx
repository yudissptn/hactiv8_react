import React, { useState } from "react";

import "../../../App.css";
import { connect } from "react-redux";
import Lists from "../container/list";

const List = ({ usersState }) => {
  return (
    <div>
      Results
      <div className="list">
        {/* {usersState} */}
        {usersState.map(list => {
          return (
            <Lists
              date={list.name}
              desc={list.username}
              number={list.website}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    usersState: state ? state.users : []
  };
};

const c = connect(
  mapStateToProps,
  null
)(List);
export default c;
