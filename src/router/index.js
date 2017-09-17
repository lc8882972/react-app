import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'

import Home from '../views/home';
import List from '../views/list';
import CLayout from '../views/layout';

// const history = createHistory()

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path="/topics/:topicId" component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.{match.url}</h3>
      
    )} />
  </div>
)

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
          <Route path="/layout" component={CLayout} />
        </Switch>
      </Router>
    );
  }
}

export default RouterConfig;