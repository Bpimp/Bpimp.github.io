import React, { Component } from 'react';
import './App.css';
import Nav from "./nav";
import RouterIndex from "./router";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <main className="main">
            <RouterIndex/>
        </main>
      </div>
    );
  }
}

export default App;
