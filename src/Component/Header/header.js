import React, { Component } from "react";
import IconsOfHeader from "./iconsOfHeader";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div
        className="container-fluid header "
        style={{
          background: "black",
          color: "white",
          padding: "14px",
          fontSize: "15px"
        }}
      >
        <div className="col-md-10">
          <span
            className="glyphicon glyphicon-phone"
            style={{ marginRight: "5px" }}
          />
          <span>Liên hệ: 0123 456 789</span>
          <br />
          <span
            className="glyphicon glyphicon-envelope"
            style={{ marginRight: "5px" }}
          />
          <span>Email: tuvanluat@gmail.com</span>
        </div>
        <div className="col-md-2">
          <IconsOfHeader />
        </div>
      </div>
    );
  }
}
