import React from 'react'
import { setAnecdote } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(props.notification){ 
  return (
    <div style={style}>
      {props.notification}
    </div>
  )}
  else{
    return null
  }
}

const mapStateToProps = (state) => {

  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, { setAnecdote })(Notification)