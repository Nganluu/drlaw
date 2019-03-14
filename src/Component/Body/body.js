import React, { Component } from 'react'
import {Button} from 'reactstrap';
import './body.css'
import Collapse from './collapse'
import Img from './img'


export default class Body extends Component { 
    constructor(props){
        super(props);
        this.state = {
          data: []
        }
      }
      
     onShow=()=>{
      
         return (
            //  this.state.data.map(item=>
                <div>
                     <Collapse style={{width: "100%", fontSize: "18px"}} />
                </div>
                
         )
     }
   
  render() {
    return (
      <div className="container-fluid">
        <span className="col-md-3" >
            <Button style={{height: "35px", width: "100%",borderColor: "black", backgroundColor: "black",fontSize: "17px"}}>DANH MỤC</Button>
            <>{this.onShow()}</>
        </span>
        <div className="col-md-1"/>
        <div className="col-md-9" > 
           <Img data={this.props.data} isSearching={this.props.isSearching}/>  
        </div>
      </div>
    )
  }
}
