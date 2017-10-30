import React from 'react'
import { Text, View } from 'react-native'
import DeckItem from './DeckItem'

export default class DeckContainer extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the DeckContainer component
        </Text>

        <DeckItem />
      </View>
    )
  }
}
