import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'

export default class Results extends React.Component {
  render () {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.resultText}>
            You have {this.props.score} correct answers of a total number 
            of {this.props.totalquestions} questions!!
          </Text>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 35,
    fontFamily: Platform.OS === 'ios' ?'San Francisco' :'Roboto',
    alignSelf: 'center'
  }
})