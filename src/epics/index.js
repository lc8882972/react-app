import { INCREASE, DECREASE } from '../constants'
import actions from '../actions/count.js'
const { increase, decrease } = actions

import '../rxjs'

export const incrementEpic = (action$, store) => {
  console.log('epic')
  return action$.ofType(INCREASE)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'DECREASE', amount: 1 })
}
// export const decreaseEpic = (action$, store) => {
//   return action$.ofType(DECREASE)
//     .mapTo({ type: 'DECREASE', amount: 1 })
// }
