import React, { Component } from "react";
import UserListBody from "./UserListBody";
import UserForm from "./UserForm";

class UserList extends Component {
  state = {
    userList: {
      data: [
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
      lastIndex: 4,
    },
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
            <UserForm userList={this.state.userList} addUser={this.addUser} />
        </div>
      </div>
    )
  }

  addUser = user => {
    const { userList } = this.state
    userList.lastIndex++
    userList.data = [...userList.data, user]
    userList.length++
    this.setState({userList})
  }

  // editUser = user => {
  //   const { userList } = this.state

  //   userList.data = userList.data.filter((iUser, i) => {
  //     if (iUser.id === user.id){
  //       userList[i].name = user.name
  //       userList[i].job = user.job
  //       return true
  //     }
  //     return false
  //   })

  // }

  removeUser = index => {
    const { userList } = this.state

    userList.data = userList.data.filter((iUser, i) => {
      return i !== index
    })

    userList.length--

    this.setState({ userList})
  }

}

export default UserList
