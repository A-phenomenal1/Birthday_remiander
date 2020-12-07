import React from "react";
import FontAwesome from "react-fontawesome";
import "./style.css";

function Button(props) {
  return (
    <div
      onClick={props.onClick}
      className="button col-5"
      style={{ backgroundColor: props.color }}
    >
      <FontAwesome name={props.iconName} className="btnicon" />

      <div className="btntext text">{props.btnName}</div>
    </div>
  );
}

export default Button;
