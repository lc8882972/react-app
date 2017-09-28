import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import * as reducers from './store'

import './styles/flexible.css'
import './styles/layout.css'
import './index.css'
import App from './App'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

const render = Component => {
  ReactDOM.render(
    <AppContainer >
      <Component store={store} />
    </AppContainer >,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}