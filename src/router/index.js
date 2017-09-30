import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import MSwitch from './switch'
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

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  // entering: { opacity: 1 },
  entered: { opacity: 1 },
  exited: { opacity: 0 },
}

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const Fade = ({ in: inProp, children, ...props }) => (
  <Transition {...props } in={inProp} appear={true} timeout={duration} onEnter={() => { console.log('onEnter()') }} onExited={() => { console.log('onExited') }}>
    {(state, props) =>
      React.cloneElement(children, {
        ...props,
        style: {
          ...defaultStyle,
          ...transitionStyles[state],
        },
      })}
  </Transition>
)

function getPathDepth(location) {
  let pathArr = (location || {}).pathname.split('/')
  pathArr = pathArr.filter(n => n !== '')
  return pathArr.length;
}
// mountOnEnter={true}
// unmountOnExit={true}
const Routers = ({ ...props }) => {
  const location = props.location
  return (
    <TransitionGroup className="wapper">
      <CSSTransition
        key={location.key}
        timeout={400}
        classNames={'pageSliderLeft'}
      >
        <MSwitch location={location}>
          <Redirect exact from='/' to='/home' />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/topics" component={Topics} />
          <Route path="/collapse" component={Collapse} />
          <Route path="/todo" component={TodoList} />
          <Route path="/anim" component={Anim} />
        </MSwitch>
      </CSSTransition>
    </TransitionGroup>
  )
}

const WrapRouters = withRouter(Routers)

export default function RouterMap() {
  return (
    <BrowserRouter>
      <WrapRouters />
    </BrowserRouter>
  )
}