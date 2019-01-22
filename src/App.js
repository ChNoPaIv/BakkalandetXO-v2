import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        
          <Route exact path="/" render={(props) => <Home {...props} name={this.props.name}></Home>} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
