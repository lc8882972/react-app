import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import RouterConfig from './router'
import createStore from './store/configureStore'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const store = createStore(middleware)

const App = () => {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <RouterConfig />
      </ConnectedRouter>
    </Provider >
  );
};
export default App;
