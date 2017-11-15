import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class DeckControls extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This is the DeckControls component</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deck: this.props.navigation.state.params.deck}
          )}>
            <Text style={styles.btnText}>Quiz</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
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
  container: {
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    marginLeft: 50,
    marginRight: 50,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'darkslategrey',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 200,
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
