import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import './reset.css'

import Header from './Header'
import LandingPage from './LandingPage'

class App extends Component {
  render() {
    return (
      <div className="LandingPage">
        <Header />
        <LandingPage />
    
      </div>
    );
  }
}

export default App;
