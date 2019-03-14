import React, { Component } from "react";
import "./menu.css";
import { Button } from "reactstrap";
import Aboutus from "./aboutUs";
import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
 componentDidMount(){
   const temp = this.props.location.search;
   if(this.props.location.search!== ' '){
   const temp2 = temp.split("?query=");
   const temp3 = temp2[0].split("%20")
   let temp4 = temp3.map(item => item+ "")
   temp4 = temp4.join(" ")
   this.setState({value: temp4})
   }
 }
  onSearch = event => {
    this.setState({ value: event.target.value });
  };
  handleEnter = event => {
    if (event.key === "Enter") {
      this.props.history.push("/more?query=" + this.state.value);
    }
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
        this.props.onTest();
        this.props.onCall(event.target.value);
    }
  };
  
  
  render() {
    return (
      <div className="container-fluid">
        <div style={{ padding: "13px" }} className="col-md-4">
          <Link to="/">
            <img
              src="http://crystalwrightlaw.com/wp-content/uploads/2017/08/Logo-cwl.png"
              alt=""
              className="menu-logo rounded-circle"
            />
          </Link>
          <Link
            to="/"
            style={{
              fontSize: "30px",
              paddingTop: "35px",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <span>
              <strong>Luật Giao Thông</strong>
            </span>
          </Link>
        </div>
        <div className="col-md-6" style={{ paddingTop: "20px" }}>
          <input
            onKeyPress={this.handleKeyPress}
            onChange={this.onSearch}
            onKeyUp={this.handleEnter}
            className="input"
            value={this.state.value}
            placeholder="Tìm kiếm...."
            style={{ paddingLeft: "10px", fontSize: "16px" }}
          />
            <i
              style={{
                fontSize: "20px",
                marginLeft: "-45px",
                marginTop: "-7px"
              }}
              className="fas fa-search"
            />
        </div>
        <div className="col-md-2" style={{ padding: "25px", fontSize: "18px" }}>
          <Link
            to="/about"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Aboutus />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
