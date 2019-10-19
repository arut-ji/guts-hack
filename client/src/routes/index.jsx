import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {routes} from './route.config';

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact
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
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};


