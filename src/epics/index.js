import {
    Observable
} from 'rxjs/Observable'
import '../rxjs'
import fetch from '../util/fetch'
import {
    INCREASE
} from '../constants'
import fetchUserActions from '../actions/user.js'
const {
    success,
    failure
} = fetchUserActions
import count from '../actions/count.js'

const {
    increase
} = count

export const incrementEpic = (action$) => {
    return action$.ofType(INCREASE)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo(increase(1))
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
export const fetchUserEpic = (action$) =>
    action$.ofType('FETCH_USER_PENDING')
    .mergeMap(() => Observable.fromPromise(fetch.get('/api/user')).map(res => success(res.data)).catch(error => Observable.of(failure(error))))