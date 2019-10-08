import React, { Component } from "react";
import UserListBody from "./UserListBody";
import UserForm from "./UserForm";

class UserApi extends Component {
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
      length: 4,
    },
  }

  render() {

    return this.state.userList
  }

}

export default UserApi
