import React, { useEffect, useState } from "react"
import { useAnswersContext } from "../contexts/answersContext"
import { useNavigate } from "react-router-dom"

const Score = () => {
  const { answers, setAnswers } = useAnswersContext()
  const [scorePoints, setScorePoints] = useState(0)
  const [scorePercentage, setScorePercentage] = useState(0)
  const nav=useNavigate()
  useEffect(() => {
    let points=0 ;
    const calculateScore = () => {
      answers.forEach((item) => {
        if (item.value == item.answer) {
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
    <div className="mx-auto mt-5 min-w-80 max-w-xl rounded-xl bg-white bg-opacity-50 px-5 py-3  shadow-lg overflow-y-auto mb-10 min-h-fit">
      <h2 className="mb-1 text-center text-2xl font-semibold italic text-white">
        Your Score:
      </h2>
      <div className="mb-1 flex items-center justify-around">
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-l from-indigo-500 via-purple-600 to-pink-500">
          <h3 className="text-pretty text-3xl font-bold text-white">
            {scorePoints}
          </h3>
          <p className="text-sm text-white">Points</p>
        </div>
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-l from-indigo-500 via-purple-600 to-pink-500">
          <h3 className="text-pretty text-3xl font-bold text-white">
            {scorePercentage}%
          </h3>
          <p className="text-sm text-white">Percentage</p>
        </div>
      </div>
      <div className="my-3 max-h-52 overflow-y-scroll rounded-lg bg-indigo-200 bg-opacity-60 p-6 shadow-lg">
        {answers.map((item, index) => {
          return (
            <div key={index} className="mb-4 rounded-lg bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold text-indigo-600 mb-2">
                Question {item.loc + 1}:{" "}
                <span className="font-normal text-gray-800">{item.locVal}</span>
              </h2>
              {item.value == item.answer ? (
                <>
                  <h2 className="mb-1 text-sm text-green-600 font-bold">
                    You were right!
                  </h2>
                  <h3 className="text-lg text-gray-700">
                    <strong>The answer:</strong>{" "}
                    <span className="text-green-600">{item.answerVal}</span>
                  </h3>
                </>
              ) : (
                <>
                  <h2 className="mb-1 text-lg text-red-600 font-bold">
                    You were wrong!
                  </h2>
                  <h3 className="mb-1 text-lg text-gray-700">
                    <strong>Your answer:</strong>{" "}
                    <span className="text-red-600">{item.valueVal}</span>
                  </h3>
                  <h3 className="text-lg text-gray-700">
                    <strong>Correct answer:</strong>{" "}
                    <span className="text-green-600">{item.answerVal}</span>
                  </h3>
                </>
              )}
            </div>
          )
        })}
      </div>
      <div className="text-center">
        <button
          className="mt-1 rounded-3xl bg-indigo-300 bg-opacity-50 p-3 font-semibold text-white shadow-xl shadow-gray-500 ease-in-out hover:scale-105 focus:scale-100"
          onClick={backToHome}
        >
          Back to home page
        </button>
      </div>
    </div>
  )
}

export default Score
