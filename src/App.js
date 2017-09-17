import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { routerReducer } from 'react-router-redux'


import RouterConfig from './router';
import * as reducers from './store'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

class App extends Component {
  render() {
    const { dispatch } = this.props

    return (
      <Provider store={store}>
        <RouterConfig />
      </Provider>
    );
  }
}

export default App;