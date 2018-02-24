import { combineReducers } from 'redux-immutable'

import countReducer from './count'
import routerReducer from './router'
import userReducer from './user'

const rootReducer = combineReducers({
  user: userReducer,
  router: routerReducer,
  counter: countReducer
})

export default rootReducer;