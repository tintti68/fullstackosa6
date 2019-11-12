const notificationReducer = (state = null, action) => {
    console.log(action.data)
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      case 'HIDE_NOTIFICATION':
        return ""
      default:
        return state
    }
  }

  function hideNotification() {
    return { type: 'HIDE_NOTIFICATION'}
  }
  export const setAnecdote = (data, time) => {
/*     return {
      type: 'SET_NOTIFICATION',
      data,
    } */
    return async dispatch => {

      //dispatch(showNotification(data))
      dispatch({ type: 'SET_NOTIFICATION', data })
      setTimeout(() => {
        dispatch(hideNotification())
      }, time*1000)
    }
  }



  
  export default notificationReducer