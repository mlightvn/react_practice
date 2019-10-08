import React from "react";

const UserListBody = props => {

  // const { removeUser } = this.props

  const rows = props.userList.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.editUser(index)} className="btn btn-sm btn-primary"><i className="fas fa-pencil-alt"></i></button>
          &nbsp;
          <button onClick={() => props.removeUser(index)} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>

}

export default UserListBody
