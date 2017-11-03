import React from 'react'
import { Text, View } from 'react-native'

export default class FrontCard extends React.Component {

  render () {
    return (
      <View>
        <Text>
          This is the FrontCard component
        </Text>
        <Text>{this.props.question}</Text>
      </View>
    )
  }
}
