import React from "react";

const List = props => {
  return (
    <div className="card">
      <h4 className="card-date">{props.date}</h4>
      <hr color="black" />
      <h4 className="card-desc">{props.desc}</h4>
      <h4 className="card-number">
        {props.number} <p className="card-went"> went</p>
      </h4>
      <button className="card-button">View</button>
    </div>
  );
};

export default List;
