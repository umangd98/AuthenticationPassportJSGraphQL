import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../queries/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';
export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }
  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: query }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }
  componentWillUpdate(nextProps) {
    // this.props    //old props
    // nextProps // next set of props when component is rerendered
    // console.log(this.props, nextProps);
    if (!this.props.data.user && nextProps.data.user) {
      //redirect to dashboard
      hashHistory.push('/dashboard');
    }
  }
  render() {
    return (
      <div>
        <h3>Login Form</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(LoginForm));
