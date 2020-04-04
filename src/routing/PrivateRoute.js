import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({component: Component, ...rest}) {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return (
      <Route
        {...rest}
        render={props => {
          if (isLoggedIn) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect to="/login" />
            );
          }
        }}
      />
    );
  };

  export default PrivateRoute;