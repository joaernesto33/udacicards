import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import DeckItemControls from './DeckItemControls'






export default class DeckItem extends React.Component {
  render () {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Deck',
          { deckTitle: this.props.title }
        )}>
          <Text>
            This is the DeckItem component
          </Text>
          <Text>
            {this.props.title}
          </Text>
          <Text>{this.props.totalcards} cards</Text>
          <DeckItemControls />
        </TouchableOpacity>
      </View>

    )
  }
}
