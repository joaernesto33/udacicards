import React from 'react'
import { Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView,
  Keyboard } from 'react-native'
import { addCardToDeck } from '../utils/helpers'

export default class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = (value) => {

    if (this.state.question != '' && this.state.answer != '') {
      Keyboard.dismiss()
      addCardToDeck(this.props.navigation.state.params.deck.title, this.state)
      .then(() => {

        const { deck } = this.props.navigation.state.params 
        deck.questions.push(this.state)

        this.props.navigation.navigate(
          'Deck',
          { deck: deck }
        )
        
      })
    }    

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
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        
        <View>
        <Text style={styles.font}>Write the new question: </Text>
        <TextInput
          placeholder={this.state.question}
          onChangeText={this.handleTextChangeQ}
          style={styles.textbox}
        />
        </View>

        <View>
        <Text style={styles.font}>Write the answer: </Text>
        <TextInput
          placeholder={this.state.answer}
          onChangeText={this.handleTextChangeA}
          style={styles.textbox}
        />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => this.submit(this.state)}>
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    marginLeft: 50,
    marginRight: 50,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'darkslategrey',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    width: 200,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  textbox: {
    borderWidth: 1,
    height: 40,
    width: 275
  },
  font: {
    fontSize: 20,
    alignSelf: 'center'
  }
})
