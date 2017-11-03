import React from 'react'
import { Text, View } from 'react-native'
import DeckControls from './DeckControls'


export default class Deck extends React.Component {

  render () {
    return (
      <View>
        <Text>
          This is the Deck component
        </Text>
        <Text>
          {this.props.navigation.state.params.deck.title}
        </Text>
        <DeckControls navigation={this.props.navigation}/>
      </View>
    )
  }
}
