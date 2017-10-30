import { combineReducers } from 'redux'
import {
  GET_DECKS,
  GET_DECK,
  ADD_DECK,
  START_QUIZ,
  SHOW_RESULTS,
  ADD_CARD,
  ANSWER_CARD
} from '../actions/index'


let InitialState = {}

function xdeck (state=InitialState, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        action.decks
      }
    case GET_DECK :
      return {
        action.deck
      }
    case ADD_DECK :
      return {
        ...state,
        action.deck
      }
    case START_QUIZ :
      const newstate = {...state}
      return {
        ...newstate,
        action.deckid,
        action.deckid[questions]
      }
    case SHOW_RESULTS :
      return {
        action.deckid,
        action.deckid[questions]
      }
    default :
    return state
  }
}

function xcard (state=InitialState, action) {
  switch (action.type) {
    case ADD_CARD :
      return {
        ...state,
        action.deckid[questions]:card
      }
    case ANSWER_CARD :
      return {
        ...state,
        action.deckid.questions.question.result:result
      }
    default :
      return state
  }
}


export default combineReducers({
  xdeck,
  xcard
})
