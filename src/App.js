import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Header from "./Component/Header/header";
import Menu from "./Component/Menu/menu";
import HomePage from "./page/homePage";
import AboutPage from "./page/aboutPage";
import SearchPage from "./page/searchPage";
import Footer from "./Component/Footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      data: []
    };
  }
  onTest = () => {
     this.setState({ isSearching: true });
  };
  fetchSearch = (gender) => {
    fetch("http://192.168.1.41:8080/api/home/law/search?question="+ gender)
    .then(response => response.json())
    .then(response => {
      console.log("fetch ok")
      this.setState({
        data: response,
      })
    })
  }
  callApi=(gender)=>{
    this.fetchSearch(gender);
  }
  render() {
    return (
      <div>
        <Header />
        <Menu onTest={this.onTest} onCall={this.callApi} isSearching={this.state.isSearching} />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route
              path="/more"
              render={() => <SearchPage data={this.state.data} isSearching={this.state.isSearching} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
