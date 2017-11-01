import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class DeckControls extends React.Component {
  render () {
    console.log(`This props controls: ${this.props.navigation.navigate}`)
    return (
      <View>
        <Text>This is the DeckControls component</Text>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
            'Quiz',
          )}>
            <Text style={styles.btnText}>Quiz</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
            'NewCard',
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
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
})
