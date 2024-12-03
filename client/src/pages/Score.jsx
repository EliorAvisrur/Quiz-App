import React, { useEffect, useState } from "react"
import { useAnswersContext } from "../contexts/answersContext"
import { useNavigate } from "react-router-dom"

const Score = () => {
  const { answers, setAnswers } = useAnswersContext()
  console.log(answers)
  const [scorePoints, setScorePoints] = useState(0)
  const [scorePercentage, setScorePercentage] = useState(0)
  const nav=useNavigate()
  useEffect(() => {
    let points=0 ;
    const calculateScore = () => {
      answers.forEach((item) => {
        if (Number(item.value) == item.answer) {
          points+=1
        }
      })
      setScorePoints((points / answers.length).toFixed(3)*100)
      setScorePercentage((points / answers.length).toFixed(3) * 100)
    }
    calculateScore()
  }, [])
  const backToHome=()=>{
    nav("/")
  }
  return (
    <div className="mx-auto mt-10 min-w-80 max-w-sm rounded-xl bg-white bg-opacity-50 p-5 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold italic text-white">
        Your Score:
      </h2>
      <div className="mb-3 flex items-center justify-around">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-l from-indigo-500 via-purple-600 to-pink-500">
          <h3 className="text-pretty text-3xl font-bold text-white">
            {scorePoints}
          </h3>
          <p className="text-lg text-white">Points</p>
        </div>
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-l from-indigo-500 via-purple-600 to-pink-500">
          <h3 className="text-pretty text-3xl font-bold text-white">
            {scorePercentage}%
          </h3>
          <p className="text-lg text-white">Percentage</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="mt-3 rounded-3xl bg-indigo-300 bg-opacity-50 p-3 font-semibold text-white shadow-2xl shadow-gray-500 ease-in-out hover:scale-105 focus:scale-100"
          onClick={backToHome}
        >
          Back to home page
        </button>
      </div>
    </div>
  )
}

export default Score
