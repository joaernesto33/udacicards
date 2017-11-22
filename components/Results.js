import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'

export default class Results extends React.Component {
  render () {
    return (
      <View>
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
  resultText: {
    fontSize: 35,
    fontFamily: Platform.OS === 'ios' ?'San Francisco' :'Roboto',
    alignSelf: 'center'
  }
})