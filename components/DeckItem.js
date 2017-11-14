import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'




export default class DeckItem extends React.Component {
  render () {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Deck',
          { deck: this.props.deck }
        )}>
          <Text>
            This is the DeckItem component
          </Text>
          <Text style={styles.title}>
            {this.props.deck.title}
          </Text>
          <Text style={styles.details}>{this.props.totalcards} cards</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

let styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  details: {
    color: 'green',
    padding: 30,
    fontSize: 20
  }
})
