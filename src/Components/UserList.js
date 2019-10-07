import React, { Component } from "react";
import UserListBody from "./UserListBody";

class UserList extends Component {
  render() {

    const { userList, removeUser } = this.props

    return (
      <div className="card">
        <div className="card-header">User List</div>
        <div className="card-body">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th></th>
              </tr>
            </thead>
            <UserListBody userList={userList} removeUser={removeUser} />
          </table>
        </div>
        <div className="card-footer">Footer</div>
      </div>
    )
  }
}

export default UserList
