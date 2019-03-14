import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BrowserRouter as Link } from 'react-router-dom'
import Childrencollapse from './childrencollapse';

export default class collapse extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            collapse: false
        };
    }
    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }
    fetchTree = (id) => {
        fetch("http://192.168.1.41:8080/api/home/node/getsubnode/"+id)
        .then(response => response.json())
        .then(response => {
          this.setState({
            data: response,
          })
        })
      }
      componentDidMount(){
          this.fetchTree(1)
      }
    childOfTransport = () => {       
        return this.state.data.map(item =>
            <div>    
            <Childrencollapse fetchTree={id=>this.fetchTree(id)} item={item}/>     
            </div>
        )
           
    }
    render() {
        return (
            <div>
                <Link to="/about">
                    <Button className="text" style={{fontSize: "20px", width:"100%", textAlign: "left"}}>
                       Phương tiện
                    </Button>
                </Link>
               {/* <Childrencollapse /> */}
                            {this.childOfTransport()}
            </div>
        )
    }
}
