// src/components/QuizApp.js
import React, { useState } from "react";
import Question from "./Question";
import quizData from "./quizData";
import QuestionFeedback from "./QuestionFeedback";
import "./QuizApp.css";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (e) => {
    const { value } = e.target;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: value });
  };

  const handleSubmit = () => {
    const currentAnswer = selectedAnswers[currentQuestion];
    if (currentAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(0);
  };

  const handleContinue = () => {
    // Move to the next question or show the result
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show the result
      setCurrentQuestion(-1);
    }
    setShowFeedback(false);
  };

  return (
    <div id="quizApp">
      <div className="app-header">
        <header>
          <h1 className="app-title">Javascript Quiz</h1>
        </header>
      </div>
      <div id="content-box" className="centered-div">
        {showFeedback ? (
          <div className="box">
            <QuestionFeedback
              submittedAns={selectedAnswers[currentQuestion]}
              correctAns={quizData[currentQuestion].correctAnswer}
              onPopUpClose={handleContinue}
            />
          </div>
        ) : currentQuestion !== -1 ? (
          <div className="box">
            <div id="ques-box">
              <Question
                question={quizData[currentQuestion].question}
                options={quizData[currentQuestion].options}
                selected={selectedAnswers[currentQuestion]}
                handleOptionSelect={handleOptionSelect}
              />
              <div id="ques-attempted-box">
                {currentQuestion + 1}/{quizData.length}
              </div>
            </div>
            <button
              id="submit-button"
              className="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <div id="score-box" className="box">
            <h1 id="score">
              Your Score: {score}/{quizData.length}
            </h1>
            <div id="restart-button">
              <button className="button" onClick={restartQuiz}>
                Restart Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
