import React from "react";
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import { userAdd } from '../Services/UserAction';

const User = ({ user, index, userAdd, removeUser, editUser }) => {

	var pad = require('pad-left');

	return (
		<tr key={index}>
			<td><span onClick={(e) => editUser(user)}>{pad(user.id, 5, '0')}</span></td>
			<td>{user.name}</td>
			<td>{user.job}</td>
			<td>
				<button onClick={(e) => editUser(user)} className="btn btn-sm btn-primary"><i className="fas fa-pencil-alt"></i></button>
				&nbsp;
				<button onClick={() => removeUser(index)} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
			</td>
		</tr>
	)

}

export default User
