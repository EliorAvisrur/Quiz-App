import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCategoryContext } from "../contexts/categoryContext"

const Menu = () => {
  const [categories, setCategories] = useState([])
  const [error,setError]=useState(null)
  const {setCategory}=useCategoryContext()
  const nav = useNavigate()
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/categories"
        )
        if(res.data.error){
          setError(res.data.error)
          throw new Error("404")
        }
        setCategories(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [])
  const handleClick = (category) => {
    nav(`/game`)
    setCategory(category)
  }
  const createButtons = () => {
    const arr = []
    let mb = "mb-3"
    categories.map((item, index) => {
      if (index == categories.length - 1) {
        mb = ""
      }
      arr.push(
        <div
          key={index}
          className={`${mb} cursor-pointer rounded-xl border border-gray-300 bg-indigo-300 py-4 text-center text-lg font-semibold text-gray-800 hover:bg-indigo-500 hover:text-opacity-90`}
          onClick={()=>handleClick(item)}
        >
          {item.name}
        </div>
      )
    })
    return arr
  }
  return (
    <div className="mt-8 w-1/3 max-w-3xl h-fit rounded-2xl bg-white bg-opacity-50 p-8 shadow-2xl">
      {error==null?createButtons():<><h1 className="text-center text-red-600 font-semibold">Data not found!!!</h1></>}
    </div>
  )
}

export default Menu
