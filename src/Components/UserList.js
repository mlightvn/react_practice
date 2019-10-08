import React, { Component } from "react";
import UserListBody from "./UserListBody";
import UserForm from "./UserForm";

class UserList extends Component {
  state = {
    userList: [
      {
        id: 1,
        name: 'Nam 1',
        job: 'Janitor',
      },
      {
        id: 2,
        name: 'Nam 2',
        job: 'Bouncer',
      },
      {
        id: 3,
        name: 'Nam 3',
        job: 'Aspring actress',
      },
      {
        id: 4,
        name: 'Nam 4',
        job: 'Bartender',
      },
    ],
  }

  render() {

    return (
      <div className="card">
        <div className="card-header">User List</div>
        <div className="card-body">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th></th>
              </tr>
            </thead>
            <UserListBody userList={this.state.userList} addUser={this.addUser} editUser={this.editUser} removeUser={this.removeUser} />
          </table>
        </div>
        <div className="card-footer">
            <UserForm addUser={this.addUser} />
        </div>
      </div>
    )
  }

  addUser = user => {
    this.setState({ userList: [...this.state.userList, user] })
  }

  editUser = index => {
    // this.setState({
    //   userList: userList.filter((character, i) => {
    //     return i !== index
    //   }),
    // })
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

export default UserList
