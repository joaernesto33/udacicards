import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import FrontCard from './FrontCard'
import BackCard from './BackCard'



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
            ? <Text>Answer</Text>
            : <Text>Question</Text>
            }
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.next('correct')}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => this.next('incorrect')}>
            <Text style={styles.btnText}>Incorrect</Text>
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
