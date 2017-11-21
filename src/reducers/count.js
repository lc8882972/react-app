import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
// import { INCREASE, DECREASE } from '../constants'

const initialState = Immutable.fromJS({
  number: 10
})

// const update = function (state = initialState, action) {
//   if (action.type === INCREASE) {
//     return state.update('number', value => value + action.amount)
//   }
//   else if (action.type === DECREASE) {
//     return rstate.update('number', value => value - action.amount)
//   }

//   return state
// }

const INCREASE = (state, action) => state.update('number', value => value + action.amount)
const DECREASE = (state, action) => state.update('number', value => value - action.amount)


const r = createReducer(initialState, { INCREASE, DECREASE })
export default r