import React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import FrontCard from './FrontCard'
import BackCard from './BackCard'



const Stack = StackNavigator({
  Front: {
    screen: FrontCard
  },
  Back: {
    screen: BackCard
  }
})


export default class QuizContainer extends React.Component {
  render () {
    return (
      <Stack />
    )
  }
}
