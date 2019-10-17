import React, { Component } from "react";
import User from "./User";

class UserListBody extends Component {

  constructor(props) {
    super(props)

    this.editUser = props.editUser.bind(this)
    this.removeUser = props.removeUser.bind(this)
  }

  render(){
    const rows = this.props.userList.data.map((row, index) => {
      return <User key={row.id} user={row} index={index} editUser={this.editUser} removeUser={this.removeUser} />
    })

    return <tbody>{rows}</tbody>

  }


}

export default UserListBody
