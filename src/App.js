// import React from 'react';
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import logo from '{process.env.PUBLIC_URL}/logo192.png';
import './App.css';
import UserList from "./Components/UserList";

// Guide
// https://www.taniarascia.com/getting-started-with-react/

class App extends Component {
  state = {
    userList: [
      {
        name: 'Nam 1',
        job: 'Janitor',
      },
      {
        name: 'Nam 2',
        job: 'Bouncer',
      },
      {
        name: 'Nam 3',
        job: 'Aspring actress',
      },
      {
        name: 'Nam 4',
        job: 'Bartender',
      },
    ],
  }

  render(){
    const { userList } = this.state

    return (
      <div>
        <header>
          <nav className="nav">
            <h1 className="container"><center>MIKO</center></h1>
          </nav>
        </header>
        <main className="App container">
          <UserList userList={userList} removeUser={this.removeUser} />
        </main>
        <footer>
          <div className="container">
            Author: Nguyen Ngoc Nam
          </div>
        </footer>
      </div>
    );

  }

  removeUser = index => {
    const { userList } = this.state

    this.setState({
      userList: userList.filter((character, i) => {
        return i !== index
      }),
    })
  }

}

export default App;
