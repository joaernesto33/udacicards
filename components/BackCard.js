import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class BackCard extends React.Component {
  render () {
    return (
      <View style={styles.textContainer}>
        <Text>
          This is the BackCard component
        </Text>
        <Text style={styles.answer}>{this.props.answer}</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  answer: {
    fontSize: 25,
    fontFamily: 'Roboto',
    color: 'green',
    alignSelf: 'center'
  }
})
