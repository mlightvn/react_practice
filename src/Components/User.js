import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userUpdate, userRemove } from '../Services/UserAction';

const User = ({ user, index, removeUser }) => {

	var pad = require('pad-left');

	return (
		<tr key={index}>
			<td><span onClick={(e) => userUpdate(user)}>{pad(user.id, 5, '0')}</span></td>
			<td>{user.name}</td>
			<td>{user.job}</td>
			<td>
				<button onClick={(e) => userUpdate(user)} className="btn btn-sm btn-primary"><i className="fas fa-pencil-alt"></i></button>
				&nbsp;
				<button onClick={() => removeUser(index)} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
			</td>
		</tr>
	)

};


User.propTypes = {
	user: PropTypes.object.isRequired,
	userUpdate: PropTypes.func.isRequired,
	userRemove: PropTypes.func.isRequired,
};

export default connect(
	null,
	{ userUpdate, userRemove }
)(User);

