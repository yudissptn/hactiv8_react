import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const List = props => {
  return (
    <div className="card">
      <h4 className="card-date">{props.date}</h4>
      <hr color="black" />
      <h4 className="card-desc">{props.desc}</h4>
      <h4 className="card-number">
        {props.number} <p className="card-went"> went</p>
      </h4>
      <Button secondary>View</Button>
    </div>
  );
};

export default List;
