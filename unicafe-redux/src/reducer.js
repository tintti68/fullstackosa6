const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return Object.assign({}, state, {
            good: state.good +1,
            ok: state.ok,
            bad: state.bad
          })
       
    case 'OK':
      return Object.assign({}, state, {
        good: state.good,
        ok: state.ok +1,
        bad: state.bad
      })
    case 'BAD':
      return Object.assign({}, state, {
        good: state.good,
        ok: state.ok,
        bad: state.bad +1
      })
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer