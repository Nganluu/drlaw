import React, { Component } from "react";
import "./footer.css";
export default class footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "15px",
          fontSize: "14px"
        }}
      >
        <i className="fas fa-copyright" style={{ marginRight: "0.5%" }} />
        <span>
          copyright by
          <i className="fas fa-at" style={{ marginLeft: "0.25%" }} /> project1
          students
        </span>
      </footer>
    );
  }
}
