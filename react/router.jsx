import React from 'react';

import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import Dashboard from './dashboard';

// COMPONENTS
import ListCategories from './components/category/list';

let routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Dashboard}>
      		<Route path='users'>
      			<IndexRoute component={ListCategories} />
      			<Route path='new' component={NewCategory} />
            <Route path=':id' component={EditCategory} />
      		</Route>
        </Route>
    </Router>
);

export default routes;