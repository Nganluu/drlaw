import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BrowserRouter as Link } from 'react-router-dom'

export default class Childrencollapse extends Component {
  constructor(props) {
    super();
    this.state = {
      collapse: false,
      updated: false,
      data: []
    }
  }
  toggle = (id) => {
    console.log(this.props.item.Id)
    // this.props.fetchTree(this.props.item.Id)
    this.fetchTree(this.props.item.Id)
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
  componentDidUpdate() {
    if (!this.state.data) this.fetchTree(1);
  }
  render() {
    const data = this.state.data;
    
    return (
      <div>
          <div> <Button onClick={this.toggle} color="light" style={{ fontSize: "18px", marginLeft: "50px", width: "85.2%", textAlign: "left" }}>
            {this.props.item.Name}
          </Button>
            <Collapse isOpen={this.state.collapse}>
            { data ?  data.map(item =>
                <div>        
                  <Button color="light" style={{ fontSize: "15px", width: "76.2%", marginLeft: "80px", textAlign: "left" }}>
                  {console.log(this.props.item.Name)}
                    <Childrencollapse item={item} />
                  </Button>
                </div>) 
                : ""}
            </Collapse>
          </div>
         
      </div>
    )
  }
}
