import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogue from "./Catalogue";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            {/*<Route path='/clients' exact={true} component={ClientList}/>*/}
            <Route path='/catalogue' exact={true} component={Catalogue}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
