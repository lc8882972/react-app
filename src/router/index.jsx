import React from 'react';
import PropTypes from 'prop-types'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Home from '../views/home'
import List from '../views/list'
import Collapse from '../views/collapse'
import TodoList from '../views/todolist'
import Topics from '../views/Topic'
import FilterableProductTable from '../views/Tabel'
// import Anim from '../views/anim'

const Routers = (props) => {
  const location = props.location
  return (
    <TransitionGroup className="wapper">
      <CSSTransition
        key={location.key}
        timeout={400}
        classNames={'pageSliderLeft'}
      >
        <Switch location={location}>
          <Redirect exact from='/' to='/home' />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/topics" component={Topics} />
          <Route path="/collapse" component={Collapse} />
          <Route path="/todo" component={TodoList} />
          <Route path="/tabel" component={FilterableProductTable} />
          {/* <Route path="/anim" component={Anim} /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

Routers.propTypes = {
  location: PropTypes.object.isRequired
}

const WrapRouters = withRouter(Routers)

export default function RouterMap() {
  return (
    <WrapRouters />
  )
}