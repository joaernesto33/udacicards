import React from 'react'
import { AsyncStorage } from 'react-native'


export const InitialState = {
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

export function getDecks () {
  return AsyncStorage.getAllKeys ()
    .then(results)
}

export function getDeck (id) {
  return AsyncStorage.getItem(id)
    .then(deckResults)
}

export function saveDeckTitle (title) {
  return AsyncStorage.setItem(title, JSON.stringify({
    [title]: title,
  }))
}

export function addCardToDeck (title, card) {
  return AsyncStorage.mergeItem(title, JSON.stringify({
    [title]: questions.card,
  }))
}
