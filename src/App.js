import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {

  // Mounting
  /*
  constructor()
  static getDerivedStateFromProps()
  render()
  componentDidMount()
  */

  //https://reactjs.org/docs/react-component.html

  /*
    Render is a lifecycle method
  */

  parentFunction = (input) => {
    return input
  }

  render() {
    return (
      // Note the special className syntax
      <div className="App">
        <Header logo={logo} parentFunction={this.parentFunction}/>
      </div>

    );
  }
}

export default App;
