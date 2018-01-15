import { combineReducers } from 'redux-immutable'

import countReducer from './count'
import routerReducer from './router'

const rootReducer = combineReducers({
  app: countReducer,
  router: routerReducer
})

export default rootReducer;