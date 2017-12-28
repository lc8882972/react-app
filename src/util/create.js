export default function createAction(type) {
  let t = type.toUpperCase()
  let p = `${t}_PENDING`
  let s = `${t}_SUCCESS`
  let f = `${t}_FAILURE`

  function action(type) {
    return function (data) {
      return { type: type, payload: data }
    }
  }

  return { pending: action(p), success: action(s), failure: action(f) }
}