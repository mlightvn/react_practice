import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      id: '',
      name: '',
      job: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { id, name, value } = event.target

    this.setState({
      [id]: name, value,
    })
  }

  submitForm = () => {
    this.props.addUser(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { id, name, job } = this.state;

    return (
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="input-group mb-3 input-group-sm">
              <div class="input-group-prepend">
                 <span class="input-group-text">ID</span>
              </div>
              <span class="">{id}</span>
              <div class="input-group-prepend">
                 <span class="input-group-text">Name</span>
              </div>
              <input type="text" class="form-control"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <div class="input-group-prepend">
                 <span class="input-group-text">Job</span>
              </div>
              <input type="text" class="form-control"
                name="job"
                value={job}
                onChange={this.handleChange}
              />
              <div class="input-group-append">
                <button type="button" onClick={this.submitForm} className="btn btn-primary"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }

}

export default UserForm
