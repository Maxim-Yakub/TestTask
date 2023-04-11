import React, {Component} from 'react';
import './styles/App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catalogue from "./pages/Catalogue";


class App extends Component {

    render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/catalogue'  exact={true} component={Catalogue}/>
          </Switch>
        </Router>
    )
  }

}

export default App;
