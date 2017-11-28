import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { incrementEpic } from '../epics'
import * as reducers from '../reducers/count'

const rootEpic = combineEpics(
  incrementEpic
);

const rootReducer = combineReducers({
  ...reducers
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