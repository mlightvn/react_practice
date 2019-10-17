import React, { Component } from "react";
import UserListBody from "./UserListBody";
import UserForm from "./UserForm";

class UserList extends Component {
  state = {
    userList: {
      userEdit: {
        id: '',
        name: '',
        job: '',
      },
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
        {
          id: 5,
          name: 'Nam 5',
          job: 'Bartender',
        },
        {
          id: 6,
          name: 'Nam 6',
          job: 'Bartender',
        },
        {
          id: 7,
          name: 'Nam 7',
          job: 'Bartender',
        },
        {
          id: 8,
          name: 'Nam 8',
          job: 'Bartender',
        },
        {
          id: 9,
          name: 'Nam 9',
          job: 'Bartender',
        },
        {
          id: 10,
          name: 'Nam 10',
          job: 'Bartender',
        },
        {
          id: 11,
          name: 'Nam 11',
          job: 'Bartender',
        },
      ],
      lastIndex: 11,
    },
  }

  render() {

    return (
      <div className="card">
        <div className="card-header">User List</div>
        <div className="card-body">
          <table className="table table-sm table-hover table-striped">
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
            <UserForm userList={this.state.userList} addEditUser={this.addEditUser} editUser={this.editUser} />
        </div>
      </div>
    )
  }

  addUser = user => {
    const { userList } = this.state
    userList.lastIndex++
    user.id = userList.lastIndex
    userList.data = [...userList.data, user]
    this.setState({userList})
// console.log(userList)
  }

  addEditUser = user => {
    const { userList } = this.state

    if(user.id){
      userList.data = userList.data.filter((iUser, i) => {
        if (iUser.id === user.id){
          iUser.name = user.name
          iUser.job = user.job
          return true
        }
        return false
      })
    }else{
      this.addUser(user)
    }

  }

  editUser = user => {
    let userList = this.state.userList
    userList.userEdit = user
    this.setState(userList)
    console.log(this.state);
  }

  removeUser = index => {
    const { userList } = this.state

    userList.data = userList.data.filter((iUser, i) => {
      return i !== index
    })

    this.setState({ userList})
  }

}

export default UserList
