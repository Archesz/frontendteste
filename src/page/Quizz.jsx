import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Question from '../components/Question/Question'
import '../styles/quiz.scss'

function Quizz(props) {
    return (
        <div className='quizz-container'>
            <Navbar />

            <div className='quizz-col'>

                <Header data={props.user}/>

                <span className='quizz-name'>{props.name}</span>
        
                <Question questions={props.data}/>

            </div>

        </div>
    )
}

export default Quizz