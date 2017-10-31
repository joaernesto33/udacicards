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
    return (
      <View>
        <Text>
          This is the DeckContainer component
        </Text>

        <DeckItem />
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
