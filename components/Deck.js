import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DeckControls from './DeckControls'


export default class Deck extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>
          This is the Deck component
        </Text>
        <Text style={styles.quizName}>
          {this.props.navigation.state.params.deck.title}
        </Text>
        <DeckControls navigation={this.props.navigation}/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizName: {
    fontSize: 45,
    fontFamily: 'Roboto'
  }
})