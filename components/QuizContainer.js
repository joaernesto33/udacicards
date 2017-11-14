import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import FrontCard from './FrontCard'
import BackCard from './BackCard'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'



export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionIndex: 0,
      frontCard: true,
      score: 0
    }
  }

  next = (score) => {
    if (this.state.questionIndex < this.props.navigation.state.params.deck.questions.length-1) {
      let next = this.state.questionIndex + 1
      this.setState (() => ({
        questionIndex: next
      }))
      console.log(this.state)

    } else {
      console.log('This is the last question')
    }

    if (score === 'correct'){
      let add = this.state.score + 1
      this.setState(() => ({
        score : add
      }))
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

  render () {
    console.log(this.state)

    let actualQuestion = this.props.navigation.state.params.deck.questions
    return (
      <View>
        {this.state.frontCard === true
          ? <FrontCard question={actualQuestion[this.state.questionIndex].question}/>
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

        <View>
          <TouchableOpacity style={styles.btnCorrect} onPress={() => this.next('correct')}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnIncorrect} onPress={() => this.next('incorrect')}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.clear()}>
            <Text style={styles.btnText}>Clear Notifications</Text>
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
  btnCorrect: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIncorrect: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
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
    color: 'green',
    padding: 20,
    fontSize: 20
  },
  detailQuestion: {
    color: 'blue',
    padding: 20,
    fontSize: 20
  }
})
