import React, { Component } from "react";
import Modal from 'react-modal'
import { Button } from "reactstrap";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '50%',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  // var newitem = localStorage.getItem("item");
  // var newitem2 = JSON.parse(newitem)
export default class modal extends Component{
  
    render(){
      console.log(this.props.item)
      
       return(
          <Modal
            id={this.props.id}
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal" >
         { localStorage.getItem("item")?
          <div>
          <h2>{JSON.parse(localStorage.getItem("item")).Content}</h2>
           <ul style={{fontSize: "18px"}}>
              <li>Đối tượng bị xử phạt: {JSON.parse(localStorage.getItem("item")).Object}</li>
              <li>Số tiền bị phạt: {JSON.parse(localStorage.getItem("item")).Money}</li>
              <li>Phụ phí: {JSON.parse(localStorage.getItem("item")).Extra}</li>
              <li>Bị giữ xe: {JSON.parse(localStorage.getItem("item")).Hold}</li>
              <li>Nguồn: {JSON.parse(localStorage.getItem("item")).Source}</li>
            </ul>
          <Button style={{marginLeft: "90%", fontSize: "15px"}} onClick={this.props.toggle}>close</Button>
          </div> : "" }
        </Modal>
        )
    }
}