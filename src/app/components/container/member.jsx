import React from "react";

const Member = () => {
  return (
    <div className="member">
      <div className="member-photo" />
      <div>
        <h4 className="name-pos">Organizer</h4>
        <div className="name-memnum">
          <strong>
            {" "}
            <p>Adhy Wiranata</p>
          </strong>
          <strong>
            {" "}
            <p className="number-member">4 others</p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Member;
