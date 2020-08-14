import React, { Component } from 'react';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import mutation from '../queries/Logout';
export class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: query }],
    });
  }
  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) {
      return <div className=""></div>;
    }
    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div className="">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <nav className="">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            <div className="nav-wrapper">{this.renderButtons()}</div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
