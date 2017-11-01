import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class BackCard extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the BackCard component
        </Text>

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Front',
          )}>
            <Text>Question</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
