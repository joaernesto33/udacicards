import React from 'react';
import { Text, View } from 'react-native';
import DeckContainer from './components/DeckContainer'
import QuizContainer from './components/QuizContainer'
import { TabNavigator, StackNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import Results from './components/Results'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'
import { setLocalNotification } from './utils/helpers'



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
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: 'darkslategrey',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


const MainNavigator = StackNavigator ({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: QuizContainer,
  },
  NewCard: {
    screen: NewQuestion,
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <MainNavigator />
    );
  }
}
