import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/app-header/AppHeader'
import AppBody from './components/app-body/AppBody.jsx';


class App extends Component {
  render() {

    return (
      <div className="App">
        <AppHeader />
        <AppBody />
      </div>
    );
  }
}

export default App;
