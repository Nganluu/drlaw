import React, { Component } from "react";
import { Button } from "reactstrap";
import { BrowserRouter as Link } from "react-router-dom";
import Modal from './Modal'

export default class img extends Component {
  constructor(props){
    super(props);
    this.state={
      modal: false
    }
  }
  toggleClose = ()=>{
    // localStorage.clear();
    this.setState({
      modal: !this.state.modal
    })
  }
  toggle=(item)=>{
   if(item)
    {
      localStorage.setItem("item",JSON.stringify(item))
    }
    this.setState({
      modal: !this.state.modal
    })
  }

  onShow=()=>{
    if(this.props.data === null) return (<div style={{fontSize: "21px"}}>Không có lỗi cần tìm!</div>)
    else
    return <ol>
      {
        this.props.data.map(item => (
          
          <li  style={{fontSize: "18px"}}>
          Lỗi {item.Content}... <span onClick={()=>{this.toggle(item)}}>Xem thêm</span>
          {/* <Modal  toggle={this.toggleClose} modalIsOpen={this.state.modal}/> */}
          </li>
        ))
      }
      <Modal  toggle={this.toggleClose} modalIsOpen={this.state.modal}/>
    </ol>
  }
  render() {
    return (
      this.props.isSearching? this.onShow() : 
      <div>
        <img
          style={{ width: "100%" }}
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <div>
          <div>
            <Link to="/more">
              <Button id="inner" color="info">
                Xem thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
