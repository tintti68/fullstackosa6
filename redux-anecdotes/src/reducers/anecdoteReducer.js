import anecdoteService from '../services/anecdotes'
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'LIKE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
     
      return state.map(note =>
        note.id !== id ? note : changedAnecdote
      ).sort((a, b) => b.votes - a.votes)
      case 'INIT_ANECDOTES':
        return action.data
    default:
      return state
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newcontent = await anecdoteService.createNew(content)
    dispatch({
    type: 'NEW_ANECDOTE',
    data: newcontent,
    })
  }
}

export const likeAnecdote = (id, content) => {
  console.log(content)
  return async dispatch => {
    const changedAnecdote = {
      ...content,
      votes: content.votes+1
    }
  const newcontent = await anecdoteService.update(id, changedAnecdote)
  dispatch({
    type: 'LIKE',
    data: { id }
  })
} 
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer