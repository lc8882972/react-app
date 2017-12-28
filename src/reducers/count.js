import Immutable from 'immutable'
import { INCREASE, DECREASE } from '../constants'

const initialState = Immutable.fromJS({
  number: 10
})

const update = function (state = initialState, action) {
  if (action.type === INCREASE) {
    return state.update('number', value => value + action.amount)
  }
  else if (action.type === DECREASE) {
    return state.update('number', value => value - action.amount)
  }

  return state
}

export default update