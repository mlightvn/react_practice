// import React from 'react';
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import logo from '{process.env.PUBLIC_URL}/logo192.png';
import './App.css';
import UserList from "./Components/UserList";

// Guide
// https://www.taniarascia.com/getting-started-with-react/

class App extends Component {

  render(){
    return (
      <div>
        <header>
          <nav className="nav">
            <h1 className="container"><center>MIKO</center></h1>
          </nav>
        </header>
        <main className="App container">
          <UserList />
        </main>
        <footer>
          <div className="container">
            Author: Nguyen Ngoc Nam
          </div>
        </footer>
      </div>
    );

  }

}

export default App;
