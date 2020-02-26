import React, { Component } from 'react';
import axios from 'axios';
import AuthService from './auth-service';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.service = new AuthService();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.service.login(username, password)
    .then(res => {
      this.props.getUser(res)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          
          <button>Login</button>
        </form>
      </div>
    )
  }
}
