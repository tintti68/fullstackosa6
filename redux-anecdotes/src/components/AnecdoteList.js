import React from 'react'
import { connect } from 'react-redux'
import { likeAnecdote } from '../reducers/anecdoteReducer'
import { setAnecdote } from '../reducers/notificationReducer'
const AnecdoteList = ( store ) => {

    const likeAndShow = (anecdote) =>{
        store.dispatch(likeAnecdote(anecdote.id, anecdote))
        store.dispatch(setAnecdote("You liked: " + anecdote.content, 5))
      }


    return (
        <div>
            {store.filteranec.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                <div>
                    has {anecdote.votes}
                     <button onClick={() => likeAndShow(anecdote)}>vote</button>
                </div>
            </div>
            )}
        </div>  
    )
}

const anecdotesToShow =  ({ anecdote, filter } ) => {
    console.log(filter)
    if (filter === '' ) {
      return anecdote
    }
    return anecdote.filter(anec => {
        return anec.content.includes(filter)
    }) 

}



const mapStateToProps = (state) => {
    // joskus on hyödyllistä tulostaa mapStateToProps:ista...
    console.log(state)
    return {
      anecdotes: state.anecdote,
      filter: state.filter,
      filteranec: anecdotesToShow(state)
    }
  }



export default connect( mapStateToProps)(AnecdoteList)