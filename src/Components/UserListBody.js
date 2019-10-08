import React from "react";

const UserListBody = props => {

  var pad = require('pad-left');
  // const { userList } = this.props

  const rows = props.userList.data.map((row, index) => {
    return (
      <tr key={index}>
        <td><span onClick={() => props.editUser(index)}>{pad(row.id, 5, '0')}</span></td>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.editUser(row)} className="btn btn-sm btn-primary disabled"><i className="fas fa-pencil-alt"></i></button>
          &nbsp;
          <button onClick={() => props.removeUser(index)} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>

}

export default UserListBody
