import React from "react";
import FontAwesome from "react-fontawesome";

function Details(props) {
  return (
    <div className="details-block p-2">
      <div className="img-container col-xs-5">
        <img src={props.imgsrc} className="img" alt="birthday-boy pic" />
      </div>
      <div className="details-container">
        <div className="name text">{props.name}</div>
        <div className="age text">{props.dob}</div>
      </div>
      <div style={{ flex: 1 }} />
      <div>
        <span className="modal-title">{props.leftDays}</span>
        <span className="age">Days</span>
      </div>
      <div style={{ flex: 1 }} className="col-md-3 col-xs-2" />
      <div className="deleteicon" onClick={props.onClick}>
        <FontAwesome name="trash" className="icon" size="2x" />
      </div>
    </div>
  );
}

export default Details;
