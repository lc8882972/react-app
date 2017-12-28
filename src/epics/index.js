import { Observable } from 'rxjs/Observable'
import '../rxjs'
import fetch from '../util/fetch'
import { INCREASE, DECREASE } from '../constants'
import fetchUserActions from '../actions/user.js'
const { success, failure } = fetchUserActions
// import count from '../actions/count.js'
// const { increase, decrease } = count

export const incrementEpic = (action$, store) => {
  return action$.ofType(INCREASE)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'DECREASE', amount: 1 })
}

export const fetchUserEpic = (action$, store) =>
  action$.ofType('FETCH_USER_PENDING')
    .mergeMap(Observable.fromPromise(fetch.get('/api/user')).map(res => success(res)))