import React, { Component } from 'react';

import DataForm from './containers/dataform/DataForm';
import Home from './containers/home/Home';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar className='navbar'/>
            <Switch>
              <Route path='/dataform' component={DataForm} />
              <Route path='/' exact component={Home} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
