import React, { Component } from 'react';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class requireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.user && !nextProps.data.loading) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props}></WrappedComponent>;
    }
  }

  return graphql(query)(requireAuth);
};
