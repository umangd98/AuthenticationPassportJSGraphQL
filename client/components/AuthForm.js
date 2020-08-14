import React, { Component } from 'react';

export class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ email: '', password: '' });
  }
  render() {
    return (
      <div className="row">
        <form action="" className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="email"
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="errors">
            {this.props.errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
