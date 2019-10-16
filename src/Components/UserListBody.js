import React, { Component } from "react";

class UserListBody extends Component {

  constructor(props) {
    super(props)
    this.initialState = {
        id: "",
        name: "",
        job: "",
    }
    this.state = this.initialState
    this.editUser = props.editUser.bind(this)
  }

  render(){

    var pad = require('pad-left');
    // const { userList } = this.props

    const rows = this.props.userList.data.map((row, index) => {
      return (
        <tr key={index}>
          <td><span onClick={(e) => this.editUser(row)}>{pad(row.id, 5, '0')}</span></td>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={(e) => this.editUser(row)} className="btn btn-sm btn-primary"><i className="fas fa-pencil-alt"></i></button>
            &nbsp;
            <button onClick={() => this.props.removeUser(index)} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
          </td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>

  }


}

export default UserListBody
