import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const TOKEN_KEY = 'TOKEN:mykey'
const NOTIFICATION_KEY = 'KEY:notifications'


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

/***********************************************************/
/****API****/
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

/**********************************************************/
/****NOTIFICATIONS****/
export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification () {
  return {
    title: 'Check your decks!',
    body: "Don't forget to study at least one deck for today!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(15)
              tomorrow.setMinutes(15)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

export async function getNotifications () {
  const Nots = await AsyncStorage.getItem(NOTIFICATION_KEY)
  if (Nots !== null)
    return JSON.parse(Nots)

}
