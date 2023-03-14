import React, { useState } from 'react';
import './Question.scss';

let letters = ["a", "b", "c", "d", "e"]

const Question = ({ questions }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const randomQuestion = () => {
    const remainingQuestions = questions.filter(
      (question) => !answeredQuestions.includes(question)
    );
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const selectedQuestion = remainingQuestions[randomIndex];
    setCurrentQuestion(selectedQuestion);
  };

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.gabarito) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    randomQuestion();
  };

  if (!currentQuestion) {
    randomQuestion();
    return null;
  }

  return (
    <div className="question">
      <h2>{currentQuestion.enunciado}</h2>
      <ul>
        {currentQuestion.alternativas.map((answer, index) => (
          <li key={answer} onClick={() => handleAnswer(answer)}>
            {`${letters[index]})`} {answer}
          </li>
        ))}
      </ul>
      <div className="score">Pontos: {score}</div>
    </div>
  );
};

export default Question;
