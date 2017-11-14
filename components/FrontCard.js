import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FrontCard extends React.Component {

  render () {
    return (
      <View>
        <Text>
          This is the FrontCard component
        </Text>
        <Text style={styles.question}>{this.props.question}</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  question: {
    fontSize: 50,
    fontFamily: 'Roboto'
  }
})