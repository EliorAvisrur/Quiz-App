import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCategoryContext } from "../contexts/categoryContext"
import axios from "axios"
import Questions from "../layout/Questions"
import { useAnswersContext } from "../contexts/answersContext"
import Score from "./Score"
const Game = () => {
  const { category } = useCategoryContext()
  const { answers, setAnswers } = useAnswersContext()
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [canPass, setCanPass] = useState(false)
  const nav=useNavigate()
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/questions/${category.code}`
        )
        if (data.length!= 0) {
          setQuestions(data)
          setAnswers([])
        }
        else{
          nav("/")
        }
        
      } catch (error) {
        console.error(error) 
      }
      finally{
        setLoading(false)
      }
    }
    fetchQuestions()
  }, [])
  
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 h-screen">
        <div className="flex h-screen max-h-screen overflow-y-scroll flex-col items-center justify-center">
          {loading ? (
            <div className="text-4xl font-extrabold italic text-white">
              <h1>Loading...</h1>
            </div>
          ) : (
            <>
              <h1 className="mt-2 text-3xl font-extrabold italic text-white">
                {category.name} Quiz
              </h1>
              {!canPass?<Questions questions={questions} setCanPass={setCanPass} />:<Score/>}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Game
