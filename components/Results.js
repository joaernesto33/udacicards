import React from 'react'
import { Text, View } from 'react-native'

export default class Results extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the results component
        </Text>
        <View>
          <Text>
            You have {this.props.score} correct answers !!
          </Text>
        </View>
      </View>
    )
  }
}
