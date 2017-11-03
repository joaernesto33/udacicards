import React from 'react'
import { Text, View } from 'react-native'

export default class BackCard extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the BackCard component
        </Text>
        <Text>{this.props.answer}</Text>
      </View>
    )
  }
}
