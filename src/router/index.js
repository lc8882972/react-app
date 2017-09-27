import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../views/home';
import List from '../views/list';
import Collapse from '../views/collapse';
import TodoList from '../views/todolist';
import Topics from '../views/Topic';
// const history = createHistory()
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

const FadeCSSTransition = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={5000}
    classNames="slide"
  >
    {children}
  </CSSTransition>
);

class RouterConfig extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/topics" component={Topics} />
          <Route path="/collapse" component={Collapse} />
          <Route path="/todo" component={TodoList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterConfig;