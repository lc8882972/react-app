import { routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutablejs';
import Immutable from 'immutable';
import { incrementEpic } from '../epics'
import * as reducers from '../reducers/count'

const rootEpic = combineEpics(
  incrementEpic
);

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        epicMiddleware
      )
    )
  );
  return store
}