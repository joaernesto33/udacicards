import React from 'react'
import { Text, View } from 'react-native'
import DeckItem from './DeckItem'
import { InitialState } from '../utils/helpers'



export default class DeckContainer extends React.Component {
  ComponentDidMount () {

  }
  render () {
    let showDecks = []
    showDecks = Object.values(InitialState)
    //if (this.props.deckslist !== undefined)
    //  showDecks = this.props.deckslist

    return (
      <View>
      {showDecks.map((deck) => (
        <View>
          <DeckItem deck={deck} totalcards={deck.questions.length} navigation={this.props.navigation}/>
        </View>
      ))}
      </View>
    )
  }
}
