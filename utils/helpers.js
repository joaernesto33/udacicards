import React from 'react'
import { AsyncStorage } from 'react-native'

const TOKEN_KEY = 'TOKEN:mykey'

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


export async function getDecks () {
  const Decks = await AsyncStorage.getItem(TOKEN_KEY)
  if (Decks !== null)
    return JSON.parse(Decks)

}


export function saveDeckTitle (payload) {
  objDeck = JSON.stringify(payload)
  return AsyncStorage.mergeItem(TOKEN_KEY, objDeck)
}


export function addCardToDeck(key, card) {
  return AsyncStorage.getItem(TOKEN_KEY)
    .then((results) => JSON.parse(results))
    .then((parsedData) => {
      return parsedData[key]
    })
    .then((actualDeck) => {
      actualDeck.questions.push(card)
      return actualDeck
    })
    .then((finalDeck) => {
      objDeck = JSON.stringify({[key]:finalDeck})
      AsyncStorage.mergeItem(TOKEN_KEY, objDeck)
    })
}


export function clearDecks () {
  return AsyncStorage.clear()
}
