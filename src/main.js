import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from './store'
import RouterConfig from './router'
import './index.css'
// import "babel-polyfill";

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.getElementById('root')
)