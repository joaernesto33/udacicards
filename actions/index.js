export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const START_QUIZ = 'START_QUIZ'
export const SHOW_RESULTS = 'SHOW_RESULTS'
export const ADD_CARD = 'ADD_CARD'
export const ANSWER_CARD = 'ANSWER_CARD'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function getDeck (deck) {
  return {
    type: GET_DECK,
    deck,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function startQuiz (deckid, questions) {
  return{
    type: START_QUIZ,
    deckid,
    questions,
  }
}

export function showResults (deckid, deckresults) {
  return {
    type: SHOW_RESULTS,
    deckid,
    deckresults,
  }
}

export function addCard (deckid, card) {
  return {
    type: ADD_CARD,
    deckid,
    card,
  }
}

export function answerCard (deckid, question, result) {
  return {
    type: ANSWER_CARD,
    deckid,
    question,
    result,
  }
}
