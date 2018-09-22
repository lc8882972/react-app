import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import rootEpic from '../epics'
import rootReducer from '../reducers'

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore(middleware) {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      logger,
      epicMiddleware,
      ...middleware
    )
  )

  return store
}