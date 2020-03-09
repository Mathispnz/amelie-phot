import React, { Component } from 'react';
import axios from 'axios';
import AuthService from './auth-service';
import './Login.scss';
import { Link, Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      adminLoggedIn: null
    };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, adminLoggedIn: nextProps["adminInSession"]})
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
      this.setState({ username: "", password: ""});
      this.props.getUser(res);
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.adminLoggedIn)
    if (this.state.adminLoggedIn) {
      return <Redirect to="/galerie" />
    }

    return (
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          
          <button>Login</button>
        </form>
      </div>
    )
  }
}
