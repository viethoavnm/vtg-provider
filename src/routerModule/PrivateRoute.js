import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default connect((state) => ({ loggedIn: state.common.loggedIn }))(
  function PrivateRoute({ component: Component, loggedIn, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => (loggedIn
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: "/notAuthorized", state: { from: props.location } }} />)
        )}
      />
    );
  })