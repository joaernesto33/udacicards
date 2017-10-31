import {
  GET_DECKS,
  GET_DECK,
  ADD_DECK,
  START_QUIZ,
  SHOW_RESULTS,
  ADD_CARD,
  ANSWER_CARD
} from '../actions/index'

let InitialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


export default function xdeck (state=InitialState, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...actions.decks
      }
    case GET_DECK :
      return {
        state
      }
    case ADD_DECK :
      return {
        state
      }
    case START_QUIZ :
      const newstate = {...state}
      return {
        state
      }
    case SHOW_RESULTS :
      return {
        state
      }
    case ADD_CARD :
      return {
        state
      }
    case ANSWER_CARD :
      return {
        state
      }
    default :
      return state
  }
}
