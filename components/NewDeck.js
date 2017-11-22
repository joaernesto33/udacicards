import React from 'react'
import { Keyboard, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView,
  Platform } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/helpers'


export default class NewDeck extends React.Component {
  state ={
    input: ''
  }

  submit = (value) => {

    if (value != '') {
      let newdeck = {[value]:{title:value,questions:[]}}
      let routedeck = {title:value,questions:[]}
      Keyboard.dismiss()
      saveDeckTitle(newdeck)
  
      this.props.navigation.navigate(
        'Deck',
        { deck: routedeck }
      )
    }
  }


  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

       <View style={styles.container}>
       <Text style={styles.font}> What is the title of your new deck? </Text>
       <TextInput
         placeholder={this.state.input}
         onChangeText={this.handleTextChange}
         style={styles.textbox}
       />

       <View style={styles.btnContainer}>
         <TouchableOpacity style={styles.btn} onPress={() => this.submit(this.state.input)}>
           <Text style={styles.btnText}>SUBMIT</Text>
         </TouchableOpacity>
       </View>
       </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textbox: {
    borderWidth: 1,
    height: 40,
    width: 275,
  },
  font: {
    fontSize: 35,
    fontFamily: Platform.OS === 'ios' ?'San Francisco' :'Roboto',
    alignSelf: 'center'
  }
})
