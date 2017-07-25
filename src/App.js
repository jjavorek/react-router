import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }

  render() {
    console.log(this.props.children);
    return (
      <div className="App">
          
          <h1> I am in APP </h1>
          <div style={{'border': 'solid thin black'}}>
            {this.props.children}
          </div>
          

      </div>
    );
  }
}
export default App;
