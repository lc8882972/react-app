import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../views/home'
import List from '../views/list'
import Collapse from '../views/collapse'
import TodoList from '../views/todolist'
import Topics from '../views/Topic'
import Anim from '../views/anim'
// const history = createHistory()
import CSSTransition from 'react-transition-group/CSSTransition'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  // entering: { opacity: 1 },
  entered: { opacity: 1 },
  exited: { opacity: 0, display: 'none' },
};

const FadeCSSTransition = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={5000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
)

class RouterConfig extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <TransitionGroup>
          <FadeCSSTransition>
            <Switch key={location.pathname} location={location}>
              <Redirect exact from='/' to='/home' />
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/topics" component={Topics} />
              <Route path="/collapse" component={Collapse} />
              <Route path="/todo" component={TodoList} />
              <Route path="/anim" component={Anim} />
            </Switch>
          </FadeCSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    );
  }
}

export default RouterConfig;