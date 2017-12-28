import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { incrementEpic, fetchUserEpic } from '../epics'
import * as reducers from '../reducers/count'
import routerReducer from '../reducers/router'

const rootEpic = combineEpics(
  incrementEpic,
  fetchUserEpic
);

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore(middleware) {
  const store = createStore(
    rootReducer,

    applyMiddleware(
      epicMiddleware,
      ...middleware
    )

  );
  return store
}