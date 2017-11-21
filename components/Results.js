import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Results extends React.Component {
  render () {
    return (
      <View >
        <Text>
          This is the results component
        </Text>
        <View>
          <Text style={styles.resultText}>
            You have {this.props.score} correct answers !!
          </Text>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 35,
    fontFamily: 'Roboto',
    alignSelf: 'center'
  }
})