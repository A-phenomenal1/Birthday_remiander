import React from "react";
import "./style.css";
import Content from "./Content";

function Main() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main-container">
          <div className="content-block col-lg-4 col-md-10 col-xs-12">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
