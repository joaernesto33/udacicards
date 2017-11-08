import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks, InitialState } from '../utils/helpers'

export default class NewDeck extends React.Component {
  state ={
    input: ''
  }

  submit = (value) => {
    let newdeck = {[value]:{title:value,questions:[]}}
    saveDeckTitle(newdeck)
  }


  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  render () {
    return (
      <View>

        <Text>First page New Deck</Text>
        <TextInput
          placeholder={this.state.input}
          onChangeText={this.handleTextChange}
        />

        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.submit(this.state.input)}>
            <Text style={styles.btnText}>SUBMIT</Text>
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
