import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import FrontCard from './FrontCard'
import BackCard from './BackCard'
import Results from './Results'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { NavigationActions } from 'react-navigation'



export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0,
      frontCard: true,
      score: 0,
      modalVisible: false
    }
  }

  next = (score) => {
    if (this.state.questionIndex < this.props.navigation.state.params.deck.questions.length-1) {
      let next = this.state.questionIndex + 1
      this.setState (() => ({
        questionIndex: next
      }))

      if (score === 'correct'){
        let add = this.state.score + 1
        this.setState(() => ({
          score : add
        }))
      }

    } else {
      
      if (score === 'correct'){
        let add = this.state.score + 1
        this.setState(() => ({
          score: add
        }))
      }
      this.setModalVisible(true)
    }
    
  }

  flipCard = () => {
    if (this.state.frontCard === true) {
      this.setState (() => ({
        frontCard: false
      }))
    } else {
      this.setState (() => ({
        frontCard: true
      }))
    }

  }

  clear = () => {
    clearLocalNotification()
      .then(setLocalNotification())
  }

  handleDeck(visible) {
    this.setState({ modalVisible: visible })
    
    this.props.navigation.navigate(
      'Deck',
      { deck: this.props.navigation.state.params.deck }
    )
  }

  setModalVisibleQuiz(visible) {
    this.setState({ modalVisible: visible })
    
    this.setState(() => ({
      questionIndex: 0,
      frontCard: true,
      score: 0    
    }))
  }

  goBackDecks(visible) {
    this.setState({ modalVisible: visible })

    this.props.navigation.navigate('Home')
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  render () {

    let actualQuestion = this.props.navigation.state.params.deck.questions
    return (
      <View style={styles.container}>
        {this.state.frontCard === true
          ? <FrontCard 
              question={actualQuestion[this.state.questionIndex].question} 
              totalquestions={this.props.navigation.state.params.deck.questions.length}
              actualquestion={this.state.questionIndex + 1}
            />
          : <BackCard answer={actualQuestion[this.state.questionIndex].answer}/>
        }

        <View>
          <TouchableOpacity onPress={() => this.flipCard()}>
            {this.state.frontCard === true
              ? <Text style={styles.detailsAnswer}>Answer</Text>
              : <Text style={styles.detailQuestion}>Question</Text>
            }
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCorrect} onPress={() => this.next('correct')}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnIncorrect} onPress={() => this.next('incorrect')}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{marginTop: 22}}>
              <View>
                <View></View>
                <Results 
                  score={this.state.score} 
                  totalquestions={this.props.navigation.state.params.deck.questions.length}
                />

                <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                  this.handleDeck(!this.state.modalVisible) 
                }}>
                  <Text style={styles.btnText}>Back to Deck</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                  this.setModalVisibleQuiz(!this.state.modalVisible)
                }}>
                  <Text style={styles.btnText}>Restart Quiz</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                  this.goBackDecks(!this.state.modalVisible)
                }}>
                  <Text style={styles.btnText}> Go to Deck list</Text>
                </TouchableOpacity>
                </View>

              </View>
            </View>
          </Modal>
        </View>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    marginLeft: 50,
    marginRight: 50,
    height: 75,
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
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnCorrect: {
    backgroundColor: 'darkgreen',
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
  btnIncorrect: {
    backgroundColor: 'darkred',
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
    fontWeight: 'bold'
  },
  detailsAnswer: {
    color: 'darkblue',
    padding: 20,
    fontSize: 20
  },
  detailQuestion: {
    color: 'darkblue',
    padding: 20,
    fontSize: 20
  }
})
