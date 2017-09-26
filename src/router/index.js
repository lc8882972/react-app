import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../views/home';
import List from '../views/list';
import Collapse from '../views/collapse';
import TodoList from '../views/todolist';
import Topics from '../views/Topic';
// const history = createHistory()

class RouterConfig extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/topics" component={Topics} />
          <Route path="/collapse" component={Collapse} />
          <Route path="/todo" component={TodoList} />
        </Switch>
      </Router>
    );
  }
}

export default RouterConfig;