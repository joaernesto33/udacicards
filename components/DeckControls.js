import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class DeckControls extends React.Component {
  render () {
    return (
      <View>
        <Text>This is the DeckControls component</Text>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deck: this.props.navigation.state.params.deck}
          )}>
            <Text style={styles.btnText}>Quiz</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
            'NewCard',
            { deck: this.props.navigation.state.params.deck }
          )}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'darkslategrey',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
