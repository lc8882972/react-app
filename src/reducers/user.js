import Immutable from 'immutable'
// import { INCREASE, DECREASE } from '../constants'

const initialState = Immutable.fromJS({
  user: {
    id: -1,
    name: ''
  }
})

const update = function (state = initialState, action) {
  if (action.type === 'FETCH_USER_SUCCESS') {
    return state.update('user', value => action.payload)
  }

  return state
}

export default update