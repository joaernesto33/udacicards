import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckContainer from './components/DeckContainer'
import QuizContainer from './components/QuizContainer'
import { TabNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import Results from './components/Results'
import { gray, white } from './utils/colors'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const Tabs = TabNavigator({
  Decks: {
    screen: DeckContainer,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  },
  Scores: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Show Results',
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: gray,
      //shadowColor: 'rgb(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Welcome ninja!</Text>

          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
