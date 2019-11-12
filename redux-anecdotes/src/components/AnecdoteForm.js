import React from 'react'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { setAnecdote } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {

  const showNotification = (message) =>{
    props.setAnecdote(message, 5)
  }


  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    showNotification(content)  
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">Add</button>
    </form>
  )
}

export default connect(null, {createAnecdote, setAnecdote } )(AnecdoteForm)