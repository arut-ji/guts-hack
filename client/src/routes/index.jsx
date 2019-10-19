import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {routes} from './route.config';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes || null}/>
      )}
    />
  );
}

export const RouteConfig = () => {
  return (
    <Router>
      {routes.map((route) => (
        <Route
          exact
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </Router>
  );
};


