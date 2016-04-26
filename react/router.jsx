import React from 'react';

import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import Dashboard from './dashboard';

// COMPONENTS
import ListUsers from './components/user/list';
import NewUsers from './components/user/new';
import EditUsers from './components/user/edit';
import Login from './components/login';

let routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Dashboard}>
      		<Route path='users'>
      			<IndexRoute component={ListUsers} />
      			<Route path='new' component={NewUsers} />
            <Route path=':id' component={EditUsers} />
      		</Route>
          <IndexRoute component={Login} />
        </Route>
    </Router>
);

export default routes;