import React from 'react';
import { Route, Redirect } from 'react-router-dom';

                           // if user logged in redirect to loggedInPath
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
    //{...rest}= {<Route exact path="/browse"}
      {...rest}
      render={() => {
        if (!user) {
          return children; //component page for sign in /Sign out..
        }

        if (user) {
          return (
            <Redirect
              to={{
                  // loggedInPath = /browse
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

// Protected Route

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
