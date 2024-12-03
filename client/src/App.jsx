import { useState } from "react"
import "./App.css"
import AppRoutes from "./routes/AppRoutes"
import { CategoryContext } from "./contexts/categoryContext"
import { AnswersContext } from "./contexts/answersContext"
function App() {
  const [category, setCategory] = useState({})
  const [answers, setAnswers] = useState([])
  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <CategoryContext.Provider value={{ category, setCategory }}>
        <AppRoutes />
      </CategoryContext.Provider>
    </AnswersContext.Provider>
  )
}

export default App
