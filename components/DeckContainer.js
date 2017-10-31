import React from 'react'
import { Text, View } from 'react-native'
import DeckItem from './DeckItem'
import { connect } from 'react-redux'



class DeckContainer extends React.Component {
  ComponentDidMount () {
    this.props.getAllDecks()
  }
  render () {
    console.log(this.props.deckslist)
    console.log(this.props.state)
    let showDecks = []
    if (this.props.state !== undefined)
      showDecks = Object.values(this.props.state)

    return (
      <View>
      {showDecks.map((deck) => (
        <View>
          <DeckItem title={deck.title} totalcards={deck.questions.length} navigation={this.props.navigation}/>
        </View>
      ))}
      </View>
    )
  }
}

function mapStateToProps (state) {
  let deckslist = Object.values(state)
  return {
    deckslist,
    state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllDecks: (decks) => dispatch(getDecks(data))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(DeckContainer)
