import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/home'
import About from './Components/about'
import Contact from './Components/contact'
import Dashboard from './Components/dashboard'
import AssetDetails from './Components/AssetDetails'
import Drag from './Components/drag'
import Header from './header'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div id="container">
          <span id="alignment"></span><div id="wrapper">
            <div id="sidebar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">                  
                <li><Link to={'/drag'} className="nav-link">Dashboard</Link></li>
                <li><Link to={'/assets'} className="nav-link">Devices connected</Link></li>
                <li><Link to={'/about'} className="nav-link">About us</Link></li>       
                         
                                 </ul>
              </nav>
            </div>
            <div id="main">
              <Switch>
              <Route path='/drag' component={Drag} />
                <Route path='/home' component={Home} />
                <Route path='/assets' component={AssetDetails} />
               
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;