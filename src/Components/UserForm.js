import React, { Component } from 'react'
import { userLoad, userEdit } from '../Services/UserAction';

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      user : {
        id: '',
        name: '',
        job: '',
      }
    }

    let user = Object.assign({}, this.initialState.user)
    this.state = {user: user}
    this.editUser = props.editUser.bind(this)
    // this.addEditUser = props.addEditUser.bind(this)

  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newUser !== this.props.newUser) {
  //     this.add(nextProps.newUser);
  //   }

  //   // if (nextProps.userToRemove !== this.props.userToRemove) {
  //   //   this.remove(nextProps.userToRemove);
  //   // }
  // }

  handleChange = event => {
    const { name, value } = event.target
    let user = this.state.user
    user[name] = value

    this.setState({user})
  }

  // add = user => {
  //   // const { user } = this.props;

  //   // updateCart(cartusers);
  //   // this.openFloatCart();
  // };

//   editUser = user => {
//     // const { name, value } = user
// console.log(user);
//     this.setState(user)
//   }

  submitForm = () => {
    this.props.addEditUser(this.state.user)

    let user = Object.assign({}, this.initialState.user)
    this.setState({user})
// console.log(this.state)
  }

  render() {
    let { user } = this.state;

    return (
      <form>
        <input type="hidden" name="id" value={user.id} />

        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3 input-group-sm">
              <div className="input-group-prepend">
                 <span className="input-group-text">Name</span>
              </div>
              <input type="text" className="form-control"
                name="name"
                value={user.name}
                onChange={this.handleChange}
              />
              <div className="input-group-prepend">
                 <span className="input-group-text">Job</span>
              </div>
              <input type="text" className="form-control"
                name="job"
                value={user.job}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button type="button" onClick={this.submitForm} className="btn btn-primary"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }

}


// const mapStateToProps = state => ({
//   cartusers: state.cart.users,
//   newuser: state.cart.userToAdd,
//   userToRemove: state.cart.userToRemove,
//   cartTotal: state.total.data
// });

// export default connect(
//   mapStateToProps,
//   { userLoad, userFormLoad }
// )(UserForm);

export default UserForm
