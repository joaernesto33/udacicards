import React from 'react'
import { Text, View, StyleSheet, Animated, Platform } from 'react-native'
import DeckControls from './DeckControls'


export default class Deck extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 30 }).start()
    Animated.spring(width, { toValue: 325, speed: 11}).start()
    Animated.spring(height, { toValue: 325, speed: 11}).start()
  }

  render () {
    const { opacity, width, height } = this.state

    return (
      <Animated.View style={[styles.container, { opacity, height, width }]}>

        <Text style={styles.quizName}>
          {this.props.navigation.state.params.deck.title}
        </Text>
        <Text style={styles.details}>
          {this.props.navigation.state.params.deck.questions.length} cards
        </Text>
        <DeckControls navigation={this.props.navigation}/>

      </Animated.View>
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
    fontFamily: Platform.OS === 'ios' ?'San Francisco' :'Roboto',
  },
  details: {
    fontWeight: 'bold'
  }
})