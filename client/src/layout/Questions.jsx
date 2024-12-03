import React, { useEffect, useState } from "react"
import { useAnswersContext } from "../contexts/answersContext"
import AnswerButton from "./AnswerButton"

const Questions = ({ questions, setCanPass }) => {
  const [isAnswered, setIsAnswered] = useState()
  const { answers, setAnswers } = useAnswersContext([])
  const [questionIndex, setquestionIndex] = useState(0)
  const [isAnswerChoosed, setIsAnswerChoosed] = useState(false)
  const currentQuestion = questions[questionIndex]
  const btn_baseDesign =
    "cursor-pointer rounded-lg p-3 text-lg text-gray-800 shadow-md transition duration-300 ease-in-out hover:opacity-55"
  useEffect(() => {
    setIsAnswered(answers.find((ans) => ans.loc == questionIndex))
    if (isAnswered) {
      setIsAnswerChoosed(true)
    } else {
      setIsAnswerChoosed(false)
    }
  }, [questionIndex, answers])
  const nextQuestion = () => {
    if (
      answers.find((ans) => ans.loc == questionIndex) &&
      questionIndex == questions.length - 1
    ) {
      setCanPass(true)
    } else if (answers.find((ans) => ans.loc == questionIndex)) {
      if (questionIndex < questions.length - 1) {
        setquestionIndex(questionIndex + 1)
        setIsAnswerChoosed(false)
      }
    }
  }
  const previousQuestion = () => {
    if (questionIndex > 0) {
      setIsAnswerChoosed(false)
      setquestionIndex(questionIndex - 1)
    }
  }
  const handleChooseAnswer = (e) => {
    if (!isAnswered) {
      e.target.className = btn_baseDesign
      setAnswers((prev) => {
        return [
          ...prev,
          {
            loc: questionIndex,
            locVal: currentQuestion.question,
            value: Number(e.target.value),
            valueVal: currentQuestion.options[Number(e.target.value)],
            answer: currentQuestion.answer,
            answerVal:currentQuestion.options[currentQuestion.answer]
          },
        ]
      })
      if (e.target.value != currentQuestion.answer) {
        e.target.className += " bg-red-500"
      }
      setIsAnswerChoosed(true)
    }
  }
  const getClassNames = (index) => {
    if (isAnswered) {
      if (index == isAnswered.value) {
        if (isAnswered.value == currentQuestion.answer) {
          return btn_baseDesign + " bg-green-500"
        } else {
          return btn_baseDesign + " bg-red-500"
        }
      }
      if (index == currentQuestion.answer) {
        return btn_baseDesign + " bg-green-500"
      }
    }
    return (
      btn_baseDesign +
      " bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
    )
  }
  return (
    <div className="mb-4 mt-3 w-3/6 max-w-2xl rounded-lg bg-white p-3 shadow-xl">
      <div>
        <h1 className="mb-4 text-xl font-bold text-gray-800">
          Question {questionIndex + 1}:
        </h1>
        <h2 className="mb-6 text-lg text-gray-700">
          {currentQuestion.question}
        </h2>
        <div className="flex flex-col space-y-4">
          {currentQuestion.options.map((item, index) => (
            <AnswerButton
              index={index}
              item={item}
              currentQuestion={currentQuestion}
              onClickFunc={handleChooseAnswer}
              classNameDesign={getClassNames(index)}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`mt-4 flex w-4/5 ${questionIndex ? "justify-between" : "justify-center"}`}
        >
          {questionIndex ? (
            <button
              className="transform rounded-lg bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
              onClick={previousQuestion}
            >
              Previous
            </button>
          ) : null}
          <button
            className={`transform rounded-lg ${isAnswered ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:scale-105" : "cursor-not-allowed bg-gray-500"} px-6 py-3 font-semibold text-white transition`}
            onClick={nextQuestion}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Questions
