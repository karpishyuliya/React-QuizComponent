import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }

    render(){
    const isQuizEnd = this.state.quiz_position === quizData.quiz_questions.length
    let pageContext
    if(isQuizEnd){
        pageContext = <QuizEnd />
    } else {
        pageContext = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
    }
        return (
            <div>
                {pageContext}                
            </div>
        )
    }
}

export default Quiz