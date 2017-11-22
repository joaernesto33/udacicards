import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'

export default class FrontCard extends React.Component {

  render () {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.indexContainer}>
          {this.props.actualquestion}/{this.props.totalquestions}
        </Text>
        <Text style={styles.question}>{this.props.question}</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 35,
    fontFamily: Platform.OS === 'ios' ?'San Francisco' :'Roboto',
    alignSelf: 'center'
  },
  indexContainer: {
    alignSelf: 'flex-end'
  }
})