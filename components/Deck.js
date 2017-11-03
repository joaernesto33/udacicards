import React from 'react'
import { Text, View } from 'react-native'
import DeckControls from './DeckControls'


export default class Deck extends React.Component {
  ComponentDidMount () {
    //console.log(this.props)
  }

  render () {
    return (
      <View>
        <Text>
          This is the Deck component
        </Text>
        <Text>
          {this.props.navigation.state.params.deckTitle}
        </Text>
        <DeckControls navigation={this.props.navigation}/>
      </View>
    )
  }
}
