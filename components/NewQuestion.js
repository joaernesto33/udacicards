import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { addCardToDeck } from '../utils/helpers'

export default class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = (value) => {
    console.log(value)
    const { question, answer } = this.state
    addCardToDeck('Deusto',this.state)
  }

  handleTextChangeQ = (question) => {
    this.setState(() => ({
      question: question
    }))
  }

  handleTextChangeA = (answer) => {
    this.setState(() => ({
      answer: answer
    }))
  }

  render () {
    return (
      <View>
        <Text>This is the NewQuestion component</Text>
        <TextInput
          placeholder={this.state.question}
          onChangeText={this.handleTextChangeQ}
        />

        <TextInput
          placeholder={this.state.answer}
          onChangeText={this.handleTextChangeA}
        />

        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.submit(this.state)}>
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
