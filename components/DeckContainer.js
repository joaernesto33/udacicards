import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
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

  render () {
    let showDecks = []

    console.log(this.state)
    showDecks = Object.values(this.state.listDecks) 

    return (
      <View>
      <ScrollView>

      {showDecks.map((deck, index) => (

        <View key={index} style={styles.item}>
          <DeckItem deck={deck} totalcards={deck.questions.length} navigation={this.props.navigation}/>
        </View>

      ))}

      </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  }
})
