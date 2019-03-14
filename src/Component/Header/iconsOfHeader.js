import React, { Component } from 'react'
import './heade.css'
export default class iconsOfHeader extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
           <a style={{color: "inherit"}} href='https://www.facebook.com/'><i className="fab fa-facebook-square header-icon"  ></i></a> 
          <a style={{color: "inherit"}} href='https://mail.google.com/mail/u/0/'><i className="fas fa-envelope header-icon"></i></a>  
          <a style={{color: "inherit"}} href="https://twitter.com/login?lang=en"><i className="fab fa-twitter-square header-icon"></i></a>  
      </div>
    )
  }
}
