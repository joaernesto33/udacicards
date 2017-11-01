import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class FrontCard extends React.Component {
  render () {
    return (
      <View>
        <Text>
          This is the FrontCard component
        </Text>

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Back',
          )}>
            <Text>Answer</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
})
