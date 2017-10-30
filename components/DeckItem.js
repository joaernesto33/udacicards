import React from 'react'
import { Text, View } from 'react-native'
import DeckItemControls from './DeckItemControls'






export default class DeckItem extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the DeckItem component
        </Text>

        <DeckItemControls />
      </View>

    )
  }
}
