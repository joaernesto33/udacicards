import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import DeckItem from './DeckItem'
import { InitialState, clearDecks, getDecks, getNotifications } from '../utils/helpers'



export default class DeckContainer extends React.Component {
  state = {
    listDecks : {}
  }

  componentDidMount () {
    getDecks()
    .then((data) => {
      this.setState(() => ({
        listDecks : data
      }))
    })
  }

  clear = () => {
    console.log(clearDecks())
  }

  showme = () => {
    getDecks()
    .then((data) => {
      console.log(data)
    })
    getNotifications()
    .then((data) => {
      console.log(data)
    })
  }

  render () {
    let showDecks = []

    console.log(this.state)
    console.log(this.state.listDecks.Bilbao)


    showDecks = Object.values(InitialState)


    return (
      <View>
      {showDecks.map((deck) => (
        <View>
          <DeckItem deck={deck} totalcards={deck.questions.length} navigation={this.props.navigation}/>
        </View>
      ))}
      <View>
        <TouchableOpacity style={styles.btn} onPress={() => this.clear()}>
          <Text style={styles.btnText}>Clear Data</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.btn} onPress={() => this.showme()}>
          <Text style={styles.btnText}>Show Data</Text>
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
