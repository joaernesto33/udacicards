import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/helpers'

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
          style={styles.textbox}
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
    backgroundColor: 'darkslategrey',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textbox: {
    borderWidth: 1,
    height: 40,
    width: 275,
  }
})
