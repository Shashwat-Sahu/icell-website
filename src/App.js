import React, { Component } from "react";
import { Route } from "react-router-dom";

import Landing from "./components/Landing";
import Home from "./components/Home";
import About from './components/About'

class App extends Component {

  render() {
    
    return (
      <>
      
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
      </>
    );
  }
}

export default App;
