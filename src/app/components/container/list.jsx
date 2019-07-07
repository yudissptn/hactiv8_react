import React from "react";

const List = () => {
  return (
    <div className="list">
      <div className="card">
        <h4 className="card-date">27 November 2017</h4>
        <hr color="black" />
        <h4 className="card-desc">#39 JakartaJS April Meetup with kumparan </h4>
        <h4 className="card-number">
          139 <p className="card-went"> went</p>
        </h4>
        <button className="card-button">View</button>
      </div>
      <div className="card">
        <h4 className="card-date">27 October 2017</h4>
        <hr color="black" />
        <h4 className="card-desc">#38 JakartaJS April Meetup with Blibli </h4>
        <h4 className="card-number">
          113 <p className="card-went"> went</p>
        </h4>
        <button className="card-button">View</button>
      </div>
      <div className="card">
        <h4 className="card-date">27 November 2017</h4>
        <hr color="black" />
        <h4 className="card-desc">#37 JakartaJS April Meetup with Hactiv8 </h4>
        <h4 className="card-number">
          110 <p className="card-went"> went</p>
        </h4>
        <button className="card-button">View</button>
      </div>
    </div>
  );
};

export default List;
