import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class BackCard extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the BackCard component
        </Text>
        <Text style={styles.answer}>{this.props.answer}</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  answer: {
    fontSize: 35,
    fontFamily: 'Roboto',
    color: 'green'
  }
})
