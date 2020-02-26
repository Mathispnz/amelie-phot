import React from 'react';
import axios from 'axios';

export default function Login() {
  return (
    <div className="Login">
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Username:</label>
        <input type="text" name="username" value={this.state.name} onChange={e => this.handleChange(e)} />
        <label>Password:</label>
        <input type="text" name="password" value={this.state.name} onChange={e => this.handleChange(e)} />
        
        <button>Login</button>
      </form>
    </div>
  )
}
