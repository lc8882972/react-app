import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store/configureStore'
import RouterConfig from './router'
import './index.css'
// import "babel-polyfill";

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.getElementById('root')
)